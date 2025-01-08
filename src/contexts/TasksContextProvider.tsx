import { createContext, useState } from "react";
import { tasksType } from "../lib/types";

type TasksContextProviderProps = {
  children: React.ReactNode;
};

type TTasksTypes = {
  tasks: tasksType[];
  totalNumberofTasks: number;
  numberOfCompleted: number;
  handleAddTask: (taskName: string) => void;
  handleDeleteTask: (id: number) => void;
  handleToggleTask: (id: number) => void;
};
export const TasksContext = createContext<TTasksTypes | null>(null);

const TasksContextProvider = ({ children }: TasksContextProviderProps) => {
  const [tasks, setTasks] = useState<tasksType[]>([]);
  // const [tasks, setTasks] = useState<tasksType>([]);

  //  derived states
  const totalNumberofTasks: number = tasks.length;
  const numberOfCompleted: number = tasks.filter((task) => task.completed).length;

  // Event handlers
  const handleAddTask = (taskName: string) => {
    if (taskName.length === 0) {
      alert("Please write something you wish to do today");
      return;
    }
    if (tasks.length >= 3) {
      alert("Please sign up  to add more than 3 tasks");
      return;
    } else {
      // update the Task List

      setTasks((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: taskName,
          completed: false,
        },
      ]);
    }
  };

  // function to delete a task from the list of tasks

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  // functio to toggle the visibility of the task list view

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <TasksContext.Provider value={{ tasks, totalNumberofTasks, numberOfCompleted, handleAddTask, handleDeleteTask, handleToggleTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
