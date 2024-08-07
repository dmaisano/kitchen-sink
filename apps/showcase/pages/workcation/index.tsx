"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import Header from "../../components/workcation/Header";
import PropertyCard from "../../components/workcation/PropertyCard";
import SearchFilter from "../../components/workcation/SearchFilter";
import { PROPERTY_LOCATIONS } from "../../components/workcation/locations";

import { Roboto } from "next/font/google";

import { cn } from "@repo/ui/utils";
import DisclaimerModal from "../../components/workcation/DisclaimerModal";
import "./index.css";

const roboto = Roboto({
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export type WorkcationStateType = {
  dropdownHasFocus: boolean;
  isOpen: boolean;
};

export type WorkcationContextType = {
  state: WorkcationStateType;
  setState: Dispatch<SetStateAction<WorkcationStateType>>;
  toggleIsOpen: () => void;
};

export const WorkcationContext = createContext<WorkcationContextType>({
  state: {
    dropdownHasFocus: false,
    isOpen: false,
  },
  setState: () => {},
  toggleIsOpen: () => {},
});

const WorkcationPage = () => {
  const [state, setState] = useState({
    isOpen: false,
    dropdownHasFocus: false,
  });

  const toggleIsOpen = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  return (
    <WorkcationContext.Provider value={{ state, setState, toggleIsOpen }}>
      <DisclaimerModal />
      <div
        className={cn(
          `min-h-full bg-slate-100 antialiased xl:flex xl:h-full xl:flex-col`,
          roboto.className,
        )}
      >
        <Header />
        <div className="xl:flex xl:flex-1 xl:overflow-y-hidden">
          <SearchFilter />
          <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
            {PROPERTY_LOCATIONS.map((location, i) => (
              <div key={i} className={i >= 1 ? `mt-6` : undefined}>
                <div className="px-4 xl:px-8">
                  <h3 className="text-xl text-gray-900">{location.title}</h3>
                  <p className="text-gray-600">{location.description}</p>
                </div>
                <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
                  <div className="px-4 sm:inline-flex sm:pb-8 sm:pt-2 xl:px-8">
                    {location.properties.map((property, j) => (
                      <div
                        key={j}
                        className={`sm:mt-0 sm:w-80 sm:flex-shrink-0 ${
                          j >= 1 ? `mt-10 sm:ml-4` : undefined
                        }`}
                      >
                        <PropertyCard property={property} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </WorkcationContext.Provider>
  );
};

export default WorkcationPage;
