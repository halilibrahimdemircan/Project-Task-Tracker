import React from "react";
import Task from "./Task";

export const Tasks = ({ tasks, deleteTask }) => {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};
