const TaskList = ({ tasks, setTasks }) => {
  // function to handle clickEvent
  const handleClick = (task) => {
    setTasks(
      tasks.map((todo) => {
        if (todo.id === task.id) {
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
    <div className="mt-5">
      <ul className="p-4 flex flex-col gap-2">
        {tasks.length === 0 ? <li>Start by adding tasks to accomplish today</li> : null}
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center cursor-pointer border-b-2 py-4 mb-2">
            <span className={`${task.completed ? "line-through text-slate-300" : ""}`} onClick={() => handleClick(task)}>
              {task.name}
            </span>
            <button
              className="text-red-600 font-bold"
              onClick={(event) => {
                event.stopPropagation();
                setTasks(tasks.filter((todo) => todo.id !== task.id));
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
