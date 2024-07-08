import { cn } from "@repo/ui/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={cn(
        `cursor-pointer rounded bg-[#724cf9] px-4 py-2 font-normal text-white outline-none hover:bg-[#4b1bf7]`,
        props.className,
      )}
    ></button>
  );
};

export default Button;
