import "./KanbanBoard.css";

type KanbanBoardProps = {
  tasks: TaskType[];
};

const stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];

const KanbanBoard = ({ tasks }: KanbanBoardProps) => {
  let stagesTasks: TaskType[][] = [];
  for (let i = 0; i < stagesNames.length; ++i) {
    stagesTasks.push([]);
  }
  for (let task of tasks) {
    const stageId = task.stage;
    stagesTasks[stageId].push(task);
  }

  return (
    <div className="mt-3 ">
      <div className="d-flex gap-3">
        {stagesTasks.map((tasks, i) => {
          return (
            <div className="card outlined p-3 flex-grow-1" key={`${i}`}>
              <div className="card-body ">
                <h4 className="card-title">{stagesNames[i]}</h4>
                <ul
                  className="list-group gap-2 mt-3"
                  data-testid={`stage-${i}`}
                >
                  {tasks.map((task, index) => {
                    return (
                      <li
                        className="list-group-item border py-1"
                        key={`${i}${index}`}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <span
                            data-testid={`${task.name.replace(" ", "-")}-name`}
                          >
                            {task.name}
                          </span>
                          <div className="btn-group">
                            <button
                              className="btn btn-light btn-sm border-white"
                              data-testid={`${task.name.replace(
                                " ",
                                "-"
                              )}-back`}
                            >
                              <span className="bi bi-arrow-left text-primary fs-5"></span>
                            </button>
                            <button
                              className="btn btn-light btn-sm border-white"
                              data-testid={`${task.name.replace(
                                " ",
                                "-"
                              )}-forward`}
                            >
                              <span className="bi bi-arrow-right text-primary fs-5"></span>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
