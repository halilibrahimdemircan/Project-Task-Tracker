import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task, deleteTask }) {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes style={{ color: "red" }} onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}