import { cn } from "@repo/ui/utils";
import React from "react";

interface HamburgerProps {
  className?: string;
  expanded: boolean;
  toggle: () => void;
  [key: string]: any;
}

const Hamburger: React.FC<HamburgerProps> = ({
  className,
  expanded,
  toggle,
  ...props
}) => {
  return (
    <button
      onClick={toggle}
      className={cn(`flex items-center focus:outline-none ml-auto`, className)}
      {...props}
    >
      <div
        className={cn(`hamburger-icon`, {
          "hamburger-icon--expanded": expanded,
        })}
      >
        <div />
      </div>
    </button>
  );
};

export default Hamburger;
