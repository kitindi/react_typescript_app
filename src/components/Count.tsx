import { useTasksContext } from "../lib/hooks";

const Count = () => {
  const { totalNumberofTasks, numberOfCompleted } = useTasksContext();
  return (
    <div>
      <p className="text-[#fefefe] text-sm">
        {" "}
        {numberOfCompleted}/ {totalNumberofTasks} Tasks completed{" "}
      </p>
    </div>
  );
};

export default Count;
