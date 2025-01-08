import { HeaderProps } from "../lib/types";

type CountProps = HeaderProps;
const Count = ({ numberOfCompleted, totalNumberofTasks }: CountProps) => {
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
