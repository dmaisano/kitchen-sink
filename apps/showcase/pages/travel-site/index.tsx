"use client";

import { cn } from "@repo/ui/utils";
import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/image";
import { RefObject, useRef, useState } from "react";
import Button from "../../components/travel-site/button";
import Hamburger from "../../components/travel-site/hamburger";
import "./index.css";

const TravelSitePage = () => {
  const [{ y }, scrollTo] = useWindowScroll();

  const headerRef = useRef<HTMLDivElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const [showMobileHamburger, setMobileHamburgerVisibility] = useState(false);
  const [showContactModal, setContactModalVisibility] = useState(false);

  const scrollToSection = (section: "splash" | "features" | "testimonials") => {
    let ref: RefObject<HTMLDivElement> | null = null;
    switch (section) {
      case "splash":
        ref = splashRef;
        break;
      case "features":
        ref = featuresRef;
        break;
      case "testimonials":
        ref = testimonialsRef;
        break;
    }
    scrollTo({ top: ref?.current?.offsetTop, behavior: "smooth" });
    setMobileHamburgerVisibility(false);
  };

  return (
    <main className="App">
      <header
        ref={headerRef}
        className={cn(
          `w-full absolute md:fixed md:bg-[rgba(47,85,114,0.3)] z-40`,
          {
            // "z-40 bg-[rgba(47,85,114,0.55)]": showMobileHamburger,
            // "z-10": !showMobileHamburger,
            "md:!bg-[rgba(23,51,72,0.85)]": typeof y === "number" && y > 0,
          },
        )}
      >
        <div className="md:hidden">
          <div className="w-full relative flex justify-center">
            <div
              id="logo"
              className="w-fit text-lg px-8 py-4 z-40 bg-[#2f5572] text-white text-center leading-none"
            >
              Clear View{" "}
              <span className="block text-2xl font-bold leading-none">
                Escapes
              </span>
            </div>
          </div>
          {/* TODO: make this sticky always visible */}
          <Hamburger
            id="mobile-menu"
            className={cn(`z-50 block md:hidden fixed top-0 right-0 p-4`, {
              // TODO: use scroll intersection to change color to primary if section is white BG
              "": !showMobileHamburger && typeof y === "number" && y > 0,
            })}
            expanded={showMobileHamburger}
            toggle={() => setMobileHamburgerVisibility(!showMobileHamburger)}
          />
          <nav
            id="expanded-mobile-menu"
            className={cn(`hidden bg-transparent`, {
              "z-30 fixed top-0 left-0 h-screen w-screen !flex flex-col gap-12 items-center justify-center !bg-[rgba(47,85,114,0.8)]":
                showMobileHamburger,
            })}
          >
            <Button
              id="splash"
              className="min-w-[200px]"
              onClick={() => scrollToSection("splash")}
            >
              Our Beginning
            </Button>
            <Button
              id="features"
              className="min-w-[200px]"
              onClick={() => scrollToSection("features")}
            >
              Features
            </Button>
            <Button
              id="testimonials"
              className="min-w-[200px]"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant="accent"
              className="min-w-[200px]"
              onClick={() => setContactModalVisibility(true)}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
        <div className="hidden md:block">
          <div id="header-links" className="w-full grid">
            <div
              id="logo"
              className="w-fit text-lg px-6 py-2 mb-0 z-40 bg-[#2f5572] text-white text-center leading-none"
            >
              Clear View{" "}
              <span className="block text-2xl font-bold leading-none">
                Escapes
              </span>
            </div>
            <nav id="links" className={`flex gap-6 text-white`}>
              <button
                id="splash"
                className={cn(`hover:text-[#d59541] font-semibold`)}
                onClick={() => scrollToSection("splash")}
              >
                Our Beginning
              </button>
              <button
                id="features"
                className={cn(`hover:text-[#d59541] font-semibold`)}
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
              <button
                id="testimonials"
                className={cn(`hover:text-[#d59541] font-semibold`)}
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </button>
              <Button
                variant="accent"
                className="rounded-none font-semibold"
                onClick={() => setContactModalVisibility(true)}
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <div
        id="hero"
        className="bg-no-repeat bg-cover transition-[background-image] duration-200 ease-in-out relative py-32 border-b-[10px] border-[#2f5572] bg-[url('/travel-site/hero-xs.jpg')] sm:bg-[url('/travel-site/hero-small.jpg')] md:bg-[url('/travel-site/hero-medium.jpg')] lg:bg-[url('/travel-site/hero-large.jpg')]"
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
            onClick={() => setContactModalVisibility(true)}
          >
            Get Started Today
          </Button>
        </div>
      </div>
      <div
        ref={splashRef}
        id="splash"
        className="bg-white py-8 px-0 md:py-[4.5rem]"
      >
        <div className="overflow-hidden px-5 mx-auto max-w-7xl">
          <h2 className="text-[#2f5572] text-center text-3xl mb-4 md:mb-8 sm:text-[2.875rem]">
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
              src="/travel-site/first-trip.jpg"
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
              src="/travel-site/our-start-landscape.jpg"
              alt="Our founder, Jane Doe"
              width={800}
              height={491}
            />
            <Image
              className="mb-0 w-1/3 mr-8 hidden md:block lg:hidden self-start"
              src="/travel-site/our-start-portrait.jpg"
              alt="Our founder, Jane Doe"
              width={382}
              height={870}
            />
            <Image
              className="mb-0 w-1/3 mr-8 hidden lg:block self-start"
              src="/travel-site/our-start.jpg"
              alt="Our founder, Jane Doe"
              width={404}
              height={531}
            />
            <div className="w-auto md:w-2/3">
              <h2 className="text-[#2f5572] text-3xl mb-6 sm:text-[2.875rem]">
                Here's how we got started...
              </h2>
              <p className="font-light leading-6 mb-7 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
                <button className="underline font-bold text-[#d59541]">
                  quis nostrud exercitation
                </button>{" "}
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
      <div
        ref={featuresRef}
        id="features"
        className="relative py-8 md:py-[4.5rem] bg-[#2f5572] overflow-hidden px-5"
      >
        <div
          id="features-grid"
          className="mx-auto max-w-screen-xl md:grid md:grid-cols-2 md:gap-8 lg:gap-12"
        >
          <div className="relative flex flex-col items-center justify-center mb-8 col-span-2">
            <Image
              className="block sm:pr-6 mb-2 sm:mb-0 w-16"
              src="/travel-site/icons/star.svg"
              alt="star"
              width={0}
              height={0}
            />
            <h2 className="text-white text-center text-4xl sm:text-6xl">
              Our <span className="font-semibold">Features</span>
            </h2>
          </div>
          <div className="block text-white text-center py-6 mb-6 border-t border-b border-gray-200 md:border-0 md:m-0 md:p-0">
            <div>
              <Image
                className="w-20 mx-auto"
                src="/travel-site/icons/rain.svg"
                alt="rain"
                width={0}
                height={0}
              />
            </div>
            <p className="text-2xl my-3">We'll Watch the Weather</p>
            <p className="font-light leading-6">
              Download our app and we'll send you a notice if it's about to rain
              in the next 20 minutes around your current location. A good rain
              can be refreshing, but sometimes you just want to stay dry.
            </p>
          </div>
          <div className="block text-white text-center pb-6 mb-6 border-b border-gray-200 md:border-0 md:m-0 md:p-0">
            <div>
              <Image
                className="w-20 mx-auto"
                src="/travel-site/icons/globe.svg"
                alt="globe"
                width={0}
                height={0}
              />
            </div>
            <p className="text-2xl my-3">Global Guides</p>
            <p className="font-light leading-6">
              We've scoured the entire planet for the best retreats and
              beautiful vistas. If there's a corner of the world you want to
              escape to we know the most scenic and inspiring locations.
            </p>
          </div>
          <div className="block text-white text-center pb-6 mb-6 border-b border-gray-200 md:border-0 md:m-0 md:p-0">
            <div>
              <Image
                className="w-20 mx-auto"
                src="/travel-site/icons/wifi.svg"
                alt="wifi"
                width={0}
                height={0}
              />
            </div>
            <p className="text-2xl my-3">Wi-fi Waypoints</p>
            <p className="font-light leading-6">
              We only send you on trips to places we can personally vouch for as
              being amazing. Which means we've mapped out where local wi-fi
              spots are and marked them in our app's map view.
            </p>
          </div>
          <div className="block text-white text-center md:m-0 md:p-0">
            <div>
              <Image
                className="w-20 mx-auto"
                src="/travel-site/icons/fire.svg"
                alt="fire"
                width={0}
                height={0}
              />
            </div>
            <p className="text-2xl my-3">Survival Kit</p>
            <p className="font-light leading-6">
              Everytime you book an escape with us we send you a survival kit
              with the finest materials. The kit will allow you to setup a tent,
              start a fire, scratch your own back and lower your taxes.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={testimonialsRef}
        id="testimonials"
        className="relative py-8 md:py-[4.5rem] bg-[#e0e6ef] overflow-hidden lg:bg-[url('/travel-site/testimonials-banner.jpg')]"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex justify-center items-center gap-2 mb-28 md:mb-32">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <path
                d="M.72.08A.67.67 0 000 .8v46.48a.72.72 0 00.72.72H48l16 16V.72a.67.67 0 00-.72-.72H.8z"
                fill="#2f5572"
              />
            </svg>
            <h2 className="text-[#2f5572] text-center text-4xl md:text-6xl">
              Real <span className="font-semibold">Testimonials</span>
            </h2>
          </div>
          <div className="flex flex-wrap w-full md:grid grid-cols-3 gap-x-12">
            <div className="w-full text-center bg-[rgba(255,255,255,0.8)] mb-28">
              <div className="mx-5 pb-6">
                <Image
                  className="mx-auto rounded-full overflow-hidden -mb-[80px] relative -top-[80px] border-[6px] border-[rgba(255,255,255,0.8)]"
                  src="/travel-site/testimonial-jane.jpg"
                  alt="Jane Doe"
                  width={160}
                  height={160}
                />
                <p className="py-1 text-[#2f5572] text-2xl font-medium leading-5">
                  Jane Doe
                </p>
                <div className="text-[#d59541] leading-5 py-1">
                  9 Time Escaper
                </div>
                <p>
                  &ldquo;Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.&rdquo;
                </p>
              </div>
            </div>
            <div className="w-full text-center bg-[rgba(255,255,255,0.8)] mb-28">
              <div className="mx-5 pb-6">
                <Image
                  className="mx-auto rounded-full overflow-hidden -mb-[80px] relative -top-[80px] border-[6px] border-[rgba(255,255,255,0.8)]"
                  src="/travel-site/testimonial-john.jpg"
                  alt="Jane Doe"
                  width={160}
                  height={160}
                />
                <p className="py-1 text-[#2f5572] text-2xl font-medium leading-5">
                  John Smith
                </p>
                <div className="text-[#d59541] leading-5 py-1">
                  4 Time Escaper
                </div>
                <p>
                  &ldquo;Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur.&rdquo;
                </p>
              </div>
            </div>
            <div className="w-full text-center bg-[rgba(255,255,255,0.8)] md:mb-28">
              <div className="mx-5 pb-6">
                <Image
                  className="mx-auto rounded-full overflow-hidden -mb-[80px] relative -top-[80px] border-[6px] border-[rgba(255,255,255,0.8)]"
                  src="/travel-site/testimonial-cat.jpg"
                  alt="Jane Doe"
                  width={160}
                  height={160}
                />
                <p className="py-1 text-[#2f5572] text-2xl font-medium leading-5">
                  Él Gato
                </p>
                <div className="text-[#d59541] leading-5 py-1">
                  6 Time Escaper
                </div>
                <p>
                  &ldquo;Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex flex-col md:flex-row md:items-center justify-center bg-[#2f5572] text-white font-extralight py-6 px-4 text-center">
        <p className="pb-1 md:pb-0 md:after:content-['\00a0']">
          Copyright &copy; {new Date().getFullYear()} Clear View Escapes
        </p>
        <p className="before:content-['|\00a0']">All rights reserved</p>
      </footer>
    </main>
  );
};

export default TravelSitePage;
