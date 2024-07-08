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
        `inline-block rounded-sm bg-[#2f5572] px-5 py-3 text-white no-underline hover:bg-[#59778e] focus:outline-none`,
        {
          "bg-[#d59541] hover:bg-[#aa7734]":
            variant === "accent" || variant === "large-accent",
          "px-8 py-5": variant === "large" || variant === "large-accent",
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
