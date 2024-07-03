import { cn } from "@repo/ui/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={cn(
        `cursor-pointer text-white font-normal bg-[#724cf9] hover:bg-[#4b1bf7] outline-none py-2 px-4 rounded`,
        props.className,
      )}
    ></button>
  );
};

export default Button;
