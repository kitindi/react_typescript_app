import React from "react";

const Count = ({ tasks }) => {
  return (
    <div>
      <p className="text-[#fefefe] text-sm">
        {" "}
        {tasks.filter((task) => task.completed).length} / {tasks.length} Tasks completed{" "}
      </p>
    </div>
  );
};

export default Count;
