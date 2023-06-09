# SpronQ coding challenge - Kanban board

Hi, welcome to the SpronQ coding challenge. I have created a basic kanban board but it is missing all functionality. It is your job to make sure the board is functional.

![kanban board](kanban%20board.png)

To complete the challenge you need to:

1. Change app to meet the [Functional requirements](#functionality-requirements)
2. Make sure the test `npm test` succeeds (this will test the functional requirements)
3. Clean up the code to make sure it is maintainable and easy to read for others (sorry, I left it quite messy 😇)

You should be able to complete the challenge in less than an hour. Time to spare? You may try to add some [extra functionality](#extra-functionality).

## Functionality Requirements

- The component board contains 4 stages of tasks in sequence - 'Backlog', 'To Do', 'Ongoing' and 'Done'.

- An array of tasks is passed as a prop to the component.

- In every individual stage, the tasks are rendered as a list `<ul>` where each task is a single list item `<li>` which displays the name of the task.
    
- Each task list item has 2 icon buttons at the right -
    1. Back button - This moves the task to the previous stage in sequence, if any. This button is disabled if the task is in the first stage.
    2. Forward button - This moves the task to the next stage in sequence, if any. This button is disabled if the task is in the last stage.

- Each task has 2 properties -
    1. name - name of task. This is the unique identification for every task. [STRING] 
    2. stage - stage of task [NUMBER] (0 represents Backlog stage, 1 represents To Do stage, 2 represents Ongoing stage, 3 represents Done stage).

## Extra functionality

This is totally optional, but you may choose to add one or more of the following items to your app:

- Add new tasks to the board
- Remove tasks from the board
- Drag and drop tasks
- Automate the tests (with github actions or similar)

## Testing Requirements

- `<ul>` for 'Backlog' stage should have the data-test-id attribute 'stage-0'.
- `<ul>` for 'To Do' stage should have the data-test-id attribute 'stage-1'.
- `<ul>` for 'Ongoing' stage should have the data-test-id attribute 'stage-2'.
- `<ul>` for 'Done' stage should have the data-test-id attribute 'stage-3'.
- Every single `<li>` task should have below:
  1. The `<span>` containing the name should have data-test-id attribute 'TASK_NAME-name' where TASK_NAME is the name of the task joined by hyphen symbol. For example, for the task named "task 0", it should be 'task-0-name'. For the task named "abc", it should be 'abc-name'.
  2. The back button should have data-test-id attribute 'TASK_NAME-back' where TASK_NAME is the name of the task joined by hyphen symbol. For example, for the task named "task 0", it should be 'task-0-back'. For the task named "abc", it should be 'abc-back'.
  3. The forward button should have data-test-id attribute 'TASK_NAME-forward' where TASK_NAME is the name of the task joined by hyphen symbol. For example, for the task named "task 0", it should be 'task-0-forward'. For the task named "abc", it should be 'abc-forward'.

## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

## Credits

This challenged is based on something I did on [HackerRank](https://www.hackerrank.com/) a while back.