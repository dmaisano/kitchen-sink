import React from "react";
import Button from "./button";

import { cn } from "@repo/ui/utils";
import Image from "next/image";

interface SpashProps {
  scrollToCheckout: () => void;
}

const Splash: React.FC<SpashProps> = ({ scrollToCheckout }) => {
  return (
    <section
      id="splash"
      className="relative min-h-full flex flex-col items-center justify-center"
    >
      <div className="splash-wrapper" />
      <Image
        alt=""
        src="/njit-capstone-project/splash_small.jpg"
        quality={100}
        fill
        sizes="100vw"
        className={cn(
          `object-cover bg -z-10 bg-cover w-full absolute top-0 left-0 block md:hidden`,
        )}
      />
      <Image
        alt=""
        src="/njit-capstone-project/splash_medium.jpg"
        quality={100}
        fill
        sizes="100vw"
        className={cn(
          `object-cover bg -z-10 bg-cover w-full absolute top-0 left-0 sm:hidden md:block lg:hidden`,
        )}
      />
      <Image
        alt=""
        src="/njit-capstone-project/splash_large.jpg"
        quality={100}
        fill
        sizes="100vw"
        className={cn(
          `object-cover bg -z-10 bg-cover w-full absolute top-0 left-0 lg:block hidden`,
        )}
      />
      <div className="z-10">
        <h1 className="w-full tracking-widest font-light text-white text-2xl flex justify-center md:justify-start absolute top-0 left-0 py-12 md:p-6">
          INSERT COMPANY
        </h1>
        <div className="mx-auto mix-blend-luminosity max-w-[768px]">
          <h2
            className="text-white text-5xl text-center mb-10"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Book World-Class Talent
          </h2>
          <p className="text-gray-200 text-lg text-center mb-10">
            Premium members get access to a world-class talent pool of
            professional talent for your next project. Our talent has won
            academy awards, grammy's and more.
          </p>
          <div className="flex justify-center">
            <Button onClick={scrollToCheckout} className="w-52">
              Let's Start
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splash;
