import { useState } from "react";
import Button from "./Button";

import { useTasksContext } from "../lib/hooks";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");

  const { handleAddTask } = useTasksContext();
  return (
    <div className="w-full h-[50vh] flex flex-col">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleAddTask(taskName);

          setTaskName("");
        }}
      >
        <input type="text" className="border focus:outline-none p-2 my-3" value={taskName} onChange={(event) => setTaskName(event.target.value)} />
        <Button>Add</Button>
      </form>
    </div>
  );
};

export default TaskForm;
