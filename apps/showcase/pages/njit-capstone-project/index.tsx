"use client";

import { Roboto } from "next/font/google";

import { cn } from "@repo/ui/utils";
import { useRef } from "react";
import "./index.css";
import Splash from "../../components/njit-capstone-project/splash";

const roboto = Roboto({
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const CapstonePage = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);

  const scrollToCheckout = () => {
    if (checkoutRef.current) {
      checkoutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  return (
    <main className={cn(`h-full`, roboto.className)}>
      <Splash scrollToCheckout={scrollToCheckout} />
      {/* <Splash
        images={{ ...state.images }}
        scrollToCheckout={scrollToCheckout}
      />
      <Features
        handleCheckout={handleCheckout}
        loading={state.loading}
        priceIDs={priceIDs}
        checkoutRef={checkoutRef}
      />
      <Quote scrollToCheckout={scrollToCheckout} />
      <Footer /> */}
    </main>
  );
};

export default CapstonePage;
