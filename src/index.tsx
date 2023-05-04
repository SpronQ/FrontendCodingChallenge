import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const tasks: TaskType[] = [
  { name: "task 0", stage: 0 },
  { name: "task 1", stage: 0 },
  { name: "task 2", stage: 0 },
  { name: "task 3", stage: 0 },
  { name: "task 4", stage: 1 },
  { name: "task 5", stage: 1 },
  { name: "task 6", stage: 1 },
  { name: "task 7", stage: 2 },
  { name: "task 8", stage: 2 },
  { name: "task 9", stage: 3 },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App tasks={tasks} />
  </React.StrictMode>
);
