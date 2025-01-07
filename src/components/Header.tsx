import React from "react";
import Count from "./Count";

export type HeaderProps = {
  numberOfCompleted: number;
  totalNumberofTasks: number;
};

const Header = ({ numberOfCompleted, totalNumberofTasks }: HeaderProps) => {
  return (
    <div className="w-full bg-[#252a2d] px-5 py-4 flex justify-between items-center">
      <div className="flex space-x-3">
        <div className="h-3 w-3 rounded-full bg-[#fefefe]"></div>
        <div className="h-3 w-3 rounded-full bg-[#fefefe]"></div>
        <div className="h-3 w-3 rounded-full bg-[#fefefe]"></div>
      </div>
      <Count totalNumberofTasks={totalNumberofTasks} numberOfCompleted={numberOfCompleted} />
    </div>
  );
};

export default Header;
