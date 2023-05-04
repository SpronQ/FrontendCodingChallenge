import KanbanBoard from "./components/KanbanBoard";

type AppProps = { tasks: TaskType[] };
const App = ({ tasks }: AppProps) => (
  <>
    <div className="navbar bg-light">
      <div className="container justify-content-center">
        <div className="navbar-brand">SpronQ - Code Challenge</div>
      </div>
    </div>
    <div className="container">
      <KanbanBoard tasks={tasks} />
    </div>
  </>
);

export default App;
