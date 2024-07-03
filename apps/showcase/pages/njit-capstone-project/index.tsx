"use client";

import { Roboto } from "next/font/google";

import { cn } from "@repo/ui/utils";
import { loadStripe } from "@stripe/stripe-js";
import { useRef, useState } from "react";
import Features from "../../components/njit-capstone-project/features";
import Footer from "../../components/njit-capstone-project/footer";
import Quote from "../../components/njit-capstone-project/quote";
import Splash from "../../components/njit-capstone-project/splash";
import "./index.css";

const roboto = Roboto({
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TEST_PK ?? "");

const CapstonePage = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    stripeError: undefined as any,
    loading: false,
  });

  const scrollToCheckout = () => {
    if (checkoutRef.current) {
      checkoutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  const handleCheckout = async (priceID: string) => {
    setState({ ...state, loading: true });

    try {
      const stripe = await stripePromise;
      const error = await stripe?.redirectToCheckout({
        lineItems: [
          {
            price: priceID,
            quantity: 1,
          },
        ],
        mode: "subscription",
        cancelUrl: document.URL,
        successUrl: document.URL,
      });

      if (error) throw error;
    } catch (error) {
      alert(`Error redirecting to Stripe checkout.`);
      setTimeout(() => {
        setState({ ...state, loading: false, stripeError: error });
      }, 500);
    }
  };

  return (
    <main className={cn(`h-full`, roboto.className)}>
      <Splash scrollToCheckout={scrollToCheckout} />
      <Features
        handleCheckout={handleCheckout}
        loading={state.loading}
        checkoutRef={checkoutRef}
      />
      <Quote scrollToCheckout={scrollToCheckout} />
      <Footer />
    </main>
  );
};

export default CapstonePage;
