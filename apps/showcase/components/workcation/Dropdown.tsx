import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { WorkcationContext } from "../../pages/workcation";

const Dropdown: React.FC = () => {
  const { state, setState, toggleIsOpen } = useContext(WorkcationContext);

  useEffect(() => {
    window.addEventListener(`keydown`, (event) => {
      if (state.isOpen && event.key === "Escape") {
        setState({ ...state, isOpen: false });
      }
    });

    // callback fn called on component unmount
    return () => {
      return window.removeEventListener(`keydown`, () => {});
    };
  });

  return (
    <div id="Dropdown" className="relative hidden sm:block">
      <button
        id="dropdown-trigger"
        onClick={() => toggleIsOpen()}
        onFocus={() => setState({ ...state, dropdownHasFocus: true })}
        onBlur={() => setState({ ...state, dropdownHasFocus: false })}
      >
        <span
          className={`block h-8 w-8 overflow-hidden rounded-full border-2 ${
            state.dropdownHasFocus || state.isOpen
              ? `border-white xl:border-indigo-500`
              : `border-gray-600 xl:border-gray-300`
          }`}
        >
          <Image
            className="h-full w-full rounded-full object-cover"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt=""
            width={40}
            height={40}
          />
        </span>
      </button>
      <div className={state.isOpen ? `block` : `hidden`}>
        <button
          onClick={() => setState({ ...state, isOpen: false })}
          type="button"
          className="fixed inset-0 z-30 block h-full w-full cursor-default"
        ></button>
        <div className="absolute right-0 z-40">
          <div className="mt-3 w-48 rounded-lg bg-white py-2 shadow-xl xl:border">
            <a
              href="#account"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Account settings
            </a>
            <a
              href="#support"
              className="mt-0 block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Support
            </a>
            <a
              href="#sign-out"
              className="mt-0 block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
