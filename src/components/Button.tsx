import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <button className="w-full bg-[#252a2d] text-[#fefefe] py-2">{children}</button>;
};

export default Button;
