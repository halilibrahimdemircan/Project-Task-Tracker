import React from "react";
import Task from "./Task";

export const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  // console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask} toggleDone={toggleDone} />
      ))}
    </div>
  );
};
