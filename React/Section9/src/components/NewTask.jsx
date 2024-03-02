import { useState } from "react";

const NewTask = ({ onAdd, onDelete }) => {
  const [enteredTask, setEnteredTask] = useState();

  const handleChange = () => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
