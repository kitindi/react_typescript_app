import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import { useState } from "react";
type tasksType = { id: number; name: string; completed: boolean }[];

function App() {
  const [tasks, setTasks] = useState<tasksType>([]);

  // function to add tasks to the list of tasks
  const handleAddTask = (taskName) => {
    if (taskName.length === 0) {
      alert("Please write something you wish to to today");
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

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  // functio to toggle the visibility of the task list view

  const handleToggleTask = (id) => {
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
    <div className="w-full h-screen bg-[#eaeaea] ">
      <div className="container max-w-4xl h-screen mx-auto overflow-hidden flex items-center justify-center">
        <div className="w-full ">
          <Header tasks={tasks} />

          <div className="w-full grid h-[80vh] grid-cols-12 bg-[#fefefe] p-16 ">
            <div className="col-span-7 h-full px-8">
              <h2 className="text-2xl font-semibold text-[#252a2d]">Task Management</h2>
              <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
            <Sidebar tasks={tasks} handleAddTask={handleAddTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
