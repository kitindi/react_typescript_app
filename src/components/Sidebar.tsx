import TaskForm from "./TaskForm";
import Button from "./Button";

type SideBarProps = {
  handleAddTask: (taskName: string) => void;
};
const Sidebar = ({ handleAddTask }: SideBarProps) => {
  return (
    <div className="col-span-5  h-full border-l-2 px-12">
      <h3>Add task to the basket</h3>
      <TaskForm handleAddTask={handleAddTask} />
      <div className="mt-auto space-y-3">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default Sidebar;
