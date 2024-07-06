"use client";

import { cn } from "@repo/ui/utils";
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "../../components/travel-site/button";
import Hamburger from "../../components/travel-site/hamburger";
import "./index.css";

const TravelSitePage = () => {
  const {} = useWindowSize();
  const [{ x, y }, scrollTo] = useWindowScroll();

  const headerRef = useRef<HTMLElement>(null);
  const splashRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number>(-1);
  const [showMobileHamburger, setMobileHamburgerVisibility] = useState(false);
  const [showContactModal, setContactModalVisibility] = useState(false);
  const [isLogoEnlarged, setLogoEnlarged] = useState(false);

  return (
    <main className="App">
      <header
        ref={headerRef}
        className={cn(
          `w-full absolute md:fixed md:bg-[rgba(47,85,114,0.3)] z-40`,
          {
            // "z-40 bg-[rgba(47,85,114,0.55)]": showMobileHamburger,
            // "z-10": !showMobileHamburger,
            "bg-[rgba(23,51,72,0.85)":
              !showMobileHamburger && typeof y === "number" && y > 0,
          },
        )}
      >
        <div className="md:hidden">
          <div className="w-full relative flex justify-center">
            <div
              id="logo"
              className={cn(
                `w-fit text-lg px-8 py-4 z-40 bg-[#2f5572] text-white text-center leading-none`,
                {
                  "": isLogoEnlarged,
                },
              )}
            >
              Clear View{" "}
              <span className="block text-2xl font-bold leading-none">
                Escapes
              </span>
            </div>
          </div>
          <Hamburger
            id="mobile-menu"
            className="z-50 block md:hidden absolute top-0 right-0 p-4"
            expanded={showMobileHamburger}
            toggle={() => setMobileHamburgerVisibility(!showMobileHamburger)}
          />
          <div
            id="expanded-mobile-menu"
            className={cn({
              "z-30 fixed top-0 left-0 h-screen w-screen flex flex-col gap-12 items-center justify-center bg-[rgba(47,85,114,0.8)]":
                showMobileHamburger,
            })}
          >
            <Button id="splash" className="min-w-[200px]">
              Our Beginning
            </Button>
            <Button id="features" className="min-w-[200px]">
              Features
            </Button>
            <Button id="testimonials" className="min-w-[200px]">
              Testimonials
            </Button>
            <Button
              onClick={() => setModalIsVisible(true)}
              className="min-w-[200px]"
              variant="accent"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <div id="header-links" className="w-full grid">
            <div />
            <div
              id="logo"
              className={cn(
                `w-fit text-lg px-6 py-2 mb-0 z-40 bg-[#2f5572] text-white text-center leading-none`,
                {
                  "": isLogoEnlarged,
                },
              )}
            >
              Clear View{" "}
              <span className="block text-2xl font-bold leading-none">
                Escapes
              </span>
            </div>
            <div />
            <div id="links" className={`flex gap-6 text-white`}>
              <button
                id="splash"
                className={cn(`hover:text-[#d59541] hover:font-semibold`)}
              >
                Our Beginning
              </button>
              <button
                id="features"
                className={cn(`hover:text-[#d59541] hover:font-semibold`)}
              >
                Features
              </button>
              <button
                id="testimonials"
                className={cn(`hover:text-[#d59541] hover:font-semibold`)}
              >
                Testimonials
              </button>
              <Button
                variant="accent"
                className="rounded-none hover:font-semibold"
                onClick={() => setModalIsVisible(true)}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div
        id="hero"
        className="bg-no-repeat bg-cover transition-[background-image] duration-[0.2] ease-in-out relative py-32 border-b-[10px] border-[#2f5572] bg-[url('/travel-site/hero_xs.jpg')] sm:bg-[url('/travel-site/hero_small.jpg')] md:bg-[url('/travel-site/hero_medium.jpg')] lg:bg-[url('/travel-site/hero_large.jpg')]"
      >
        <div className="overflow-hidden px-5 mx-auto max-w-7xl z-10 text-center">
          <h1 className="text-[#2f5572] font-normal text-4xl sm:text-7xl pb">
            Your Clarity.
          </h1>
          <h2 className="text-[#2f5572] font-normal text-2xl sm:text-5xl sm:mb-4 md:mb-8">
            One trip away.
          </h2>
          <p
            id="description"
            className="text-white font-thin text-lg sm:text-3xl max-w-md my-4 mx-auto md:mb-8 [text-shadow:_2px_2px_0_rgb(0_0_0_/_10%)]"
          >
            We create soul restoring journeys that inspire you to be you.
          </p>
          <Button
            variant="large-accent"
            className="text-lg rounded"
            onClick={() => setModalIsVisible(true)}
          >
            Get Started Today
          </Button>
        </div>
      </div>
      <div
        ref={splashRef as any}
        id="splash"
        className="bg-white py-8 px-0 md:py-[4.5rem]"
      >
        <div className="overflow-hidden px-5 mx-auto max-w-7xl">
          <h2 className="text-[#2f5572] text-center text-3xl font-thin mb-4 md:mb-8 sm:text-[2.875rem]">
            The first trip we planned{" "}
            <span className="font-semibold">was our own.</span>
          </h2>
          <h3 className="text-[#d59541] text-center text-xl sm:text-3xl font-thin mb-4 md:mb-8  lg:max-w-md lg:mx-auto">
            Ever since, we&rsquo;ve been working to make travel{" "}
            <span className="font-normal">better for everyone.</span>
          </h3>
          <div className="w-full mx-auto text-center mb-8">
            <Image
              className="mx-auto"
              src="/travel-site/first_trip.jpg"
              alt="Couple walking down a street."
              width={976}
              height={421}
            />
          </div>
          <div
            id="founder"
            className="block md:flex lg:max-w-screen-xl mx-auto"
          >
            <Image
              className="mb-8 !w-auto block md:hidden self-start"
              src="/travel-site/our_start_landscape.jpg"
              alt="Our founder, Jane Doe"
              width={800}
              height={491}
            />
            <Image
              className="mb-0 w-1/3 mr-8 hidden md:block lg:hidden self-start"
              src="/travel-site/our_start_portrait.jpg"
              alt="Our founder, Jane Doe"
              width={382}
              height={870}
            />
            <Image
              className="mb-0 w-1/3 mr-8 hidden lg:block self-start"
              src="/travel-site/our_start.jpg"
              alt="Our founder, Jane Doe"
              width={404}
              height={531}
            />
            <div className="w-auto md:w-2/3">
              <h2 className="text-[#2f5572] font-light text-3xl mb-6 sm:text-[2.875rem]">
                Here&rsquo;s how we got started&hellip;
              </h2>
              <p className="font-light leading-6 mb-7 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
                <a className="underline font-bold text-[#d59541]" href="#">
                  quis nostrud exercitation
                </a>{" "}
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="font-light leading-6 mb-7 md:text-lg">
                Duis aute irure dolor in <strong>reprehenderit in</strong>{" "}
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="font-light leading-6 mb-7 md:text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum velit esse cillum{" "}
                <strong>dolore eu fugiat.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TravelSitePage;
