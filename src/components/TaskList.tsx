import { tasksType } from "../lib/types";

type TaskListProps = {
  tasks: tasksType[];
  handleToggleTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
};

const TaskList = ({ tasks, handleToggleTask, handleDeleteTask }: TaskListProps) => {
  return (
    <div className="mt-5">
      <ul className="p-4 flex flex-col gap-2">
        {tasks.length === 0 && <li>Start by adding tasks to accomplish today</li>}
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center cursor-pointer border-b-2 py-4 mb-2">
            <span className={`${task.completed ? "line-through text-slate-300" : ""}`} onClick={() => handleToggleTask(task.id)}>
              {task.name}
            </span>
            <button
              className="text-red-600 font-bold"
              onClick={(event) => {
                event.stopPropagation();
                handleDeleteTask(task.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
