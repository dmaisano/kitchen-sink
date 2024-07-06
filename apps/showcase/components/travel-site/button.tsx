import { cn } from "@repo/ui/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "large" | "large-accent";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        `rounded-sm px-5 py-3 text-white no-underline inline-block bg-[#2f5572] focus:outline-none`,
        {
          "!bg-[#d59541]": variant === "accent" || variant === "large-accent",
          "py-5 px-8": variant === "large" || variant === "large-accent",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
