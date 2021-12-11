import React from "react";
import Button from "./Button";

export default function Header({ title }) {
  const handleClick = () => {
    console.log("clicked from header");
  };
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
      </header>

      <Button
        handleClick={handleClick}
        color="purple"
        text="Show Add Task Bar"
      />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
