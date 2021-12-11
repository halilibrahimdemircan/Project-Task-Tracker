import React from "react";
import "../App.css";

export default function Button({ color, text, handleClick }) {
  return (
    <div>
      <button
        className="btn"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
}
