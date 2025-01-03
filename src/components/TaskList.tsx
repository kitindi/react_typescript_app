import React from "react";

const initalTasks = ["Going to the market", "Do laundry"];
const TaskList = () => {
  return (
    <div className="mt-5">
      <ul className="p-4 flex flex-col gap-2">
        {initalTasks.map((task) => (
          <li className="flex justify-between items-center cursor-pointer border-b-2 py-4 mb-2">
            <span>{task}</span> <button className="text-red-600 font-bold">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
