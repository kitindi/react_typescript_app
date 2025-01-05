import React from "react";
import TaskForm from "./TaskForm";
import Button from "./Button";

const Sidebar = ({ tasks, handleAddTask }) => {
  return (
    <div className="col-span-5  h-full border-l-2 px-12">
      <h3>Add task to the basket</h3>
      <TaskForm tasks={tasks} handleAddTask={handleAddTask} />
      <div className="mt-auto space-y-3">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default Sidebar;
