import React from "react";
import Button from "./Button";

export default function Header({ title, showAddTask, showAddTaskBar }) {
  const handleClick = () => {
    // console.log("clicked from header");
  };
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
      </header>

      <Button
        handleClick={handleClick}
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        showAddTaskBar={showAddTaskBar}
      />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
