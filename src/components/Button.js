import React from "react";
import "../App.css";

export default function Button({ color, text, showAddTaskBar }) {
  return (
    <div>
      <button
        className="btn"
        onClick={showAddTaskBar}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
}
