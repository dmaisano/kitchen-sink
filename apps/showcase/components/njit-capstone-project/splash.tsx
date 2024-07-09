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
      className="relative flex min-h-full flex-col items-center justify-center"
    >
      <div className="splash-wrapper" />
      <Image
        alt=""
        src="/njit-capstone-project/splash-small.jpg"
        quality={100}
        fill
        sizes="100vw"
        className={cn(
          `bg absolute left-0 top-0 z-10 block w-full bg-cover object-cover md:hidden`,
        )}
      />
      <Image
        alt=""
        src="/njit-capstone-project/splash-medium.jpg"
        quality={100}
        fill
        sizes="100vw"
        className={cn(
          `bg absolute left-0 top-0 z-10 w-full bg-cover object-cover sm:hidden md:block lg:hidden`,
        )}
      />
      <Image
        alt=""
        src="/njit-capstone-project/splash-large.jpg"
        quality={100}
        fill
        sizes="100vw"
        className={cn(
          `bg absolute left-0 top-0 z-10 hidden w-full bg-cover object-cover lg:block`,
        )}
      />
      <div className="z-30">
        <h1 className="absolute left-0 top-0 flex w-full justify-center py-12 text-2xl font-light tracking-widest text-white md:justify-start md:p-6">
          INSERT COMPANY
        </h1>
        <div className="mx-auto max-w-[768px] mix-blend-luminosity">
          <h2
            className="mb-10 text-center text-5xl text-white"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            Book World-Class Talent
          </h2>
          <p className="mb-10 text-center text-lg text-gray-200">
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
