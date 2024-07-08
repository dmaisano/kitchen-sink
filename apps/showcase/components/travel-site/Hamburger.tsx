import { cn } from "@repo/ui/utils";
import React from "react";

interface HamburgerProps {
  className?: string;
  expanded: boolean;
  variant: "light" | "dark";
  toggle: () => void;
  [key: string]: any;
}

const Hamburger: React.FC<HamburgerProps> = ({
  className,
  expanded,
  variant,
  toggle,
  ...props
}) => {
  return (
    <button
      id="mobile-icon"
      onClick={toggle}
      className={cn(
        `fixed right-0 top-0 ml-auto flex items-center p-4 focus:outline-none md:hidden`,
        className,
      )}
      {...props}
    >
      <div
        className={cn(`hamburger-icon`, {
          "hamburger-icon--dark": variant === "dark",
          "hamburger-icon--expanded": expanded,
        })}
      >
        <div />
      </div>
    </button>
  );
};

export default Hamburger;
