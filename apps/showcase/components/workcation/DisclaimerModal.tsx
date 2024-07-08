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
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        {
          hidden: !isModalOpen,
        },
      )}
    >
      <div className="w-full max-w-sm rounded bg-white p-4 shadow-lg">
        <h2 className="mb-4 text-center text-xl font-bold">
          Welcome to Workcation! 🌴
        </h2>
        <p className="mb-4 text-center">
          ⚠️ Quick disclaimer. This website is a demo for illustrative purposes
          only. It is not intended to represent a full-fledged product.
        </p>
        <div className="flex w-full justify-center">
          <button
            onClick={() => handleAcknowledge()}
            className="rounded bg-teal-500 px-8 py-2 text-white transition hover:bg-teal-700"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
