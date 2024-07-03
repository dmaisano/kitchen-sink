"use client";

import { cn } from "@repo/ui/utils";
import React, { useEffect, useState } from "react";

const DisclaimerModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window == "undefined") return;

    const isAcknowledged = sessionStorage.getItem(
      "workcation-disclaimer-acknowledged",
    );
    setIsModalOpen(!isAcknowledged);
  });

  const handleAcknowledge = () => {
    if (typeof window !== "undefined") {
      setIsModalOpen(false);
      sessionStorage.setItem("workcation-disclaimer-acknowledged", "true");
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
        {
          hidden: !isModalOpen,
        },
      )}
    >
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-xl mb-4 font-bold text-center">
          Welcome to Workcation! 🌴
        </h2>
        <p className="mb-4 text-center">
          ⚠️ Quick disclaimer. This website is a demo for illustrative purposes
          only. It is not intended to represent a full-fledged product.
        </p>
        <div className="w-full flex justify-center">
          <button
            onClick={() => handleAcknowledge()}
            className="bg-teal-500 text-white px-8 py-2 rounded hover:bg-teal-700 transition"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
