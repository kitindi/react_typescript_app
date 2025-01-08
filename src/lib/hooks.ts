import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContextProvider";

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("Forgot to pass context providers");
  }

  return context;
}
