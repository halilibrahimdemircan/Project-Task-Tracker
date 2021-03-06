import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("text", text, "day", day);
    addTask({ text, day, isDone: false });
    setText("");
    setDay("");
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   addTask({ text, day, isDone: false });
  //   setText("");
  //   setDay("");
  // };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          //ref={text}
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          // onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          //ref={day}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};
export default AddTask;
