"use client";

import { cn } from "@repo/ui/utils";
import { useIntersectionObserver, useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/image";
import { useState } from "react";
import Button from "../../components/travel-site/Button";
import ContactModal from "../../components/travel-site/ContactModal";
import Hamburger from "../../components/travel-site/Hamburger";
import "./index.css";

const TravelSitePage = () => {
  const [{ y }] = useWindowScroll();

  const [splashRef, splashEntry] = useIntersectionObserver({ threshold: 0.66 });
  const [featuresRef, featuresEntry] = useIntersectionObserver({
    threshold: 0.66,
  });
  const [testimonialsRef, testimonialsEntry] = useIntersectionObserver({
    threshold: 0.66,
  });

  const [showMobileHamburger, setMobileHamburgerVisibility] = useState(false);
  const [showContactModal, setContactModalVisibility] = useState(false);

  const scrollToSection = (section: "splash" | "features" | "testimonials") => {
    switch (section) {
      case "splash":
        splashEntry?.target?.scrollIntoView({ behavior: "smooth" });
        break;
      case "features":
        featuresEntry?.target?.scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonials":
        testimonialsEntry?.target?.scrollIntoView({ behavior: "smooth" });
        break;
    }
    setMobileHamburgerVisibility(false);
  };

  const toggleContactFormVisibility = () => {
    setMobileHamburgerVisibility(false);
    setContactModalVisibility(!showContactModal);
  };

  return (
    <main className="App">
      <ContactModal
        showContactModal={showContactModal}
        toggleContactFormVisibility={toggleContactFormVisibility}
      />
      <header
        className={cn(
          `absolute z-30 w-full md:fixed md:bg-[rgba(47,85,114,0.3)]`,
          {
            "md:!bg-[rgba(23,51,72,0.85)]": typeof y === "number" && y > 0,
          },
        )}
      >
        <div className="md:hidden">
          <div className="fixed flex w-full justify-center bg-[rgba(47,85,114,0.8)]">
            <div
              id="logo"
              className="z-30 w-fit bg-[#2f5572] px-8 py-4 text-center text-lg leading-none text-white"
            >
              Clear View{" "}
              <span className="block text-2xl font-bold leading-none">
                Escapes
              </span>
            </div>
          </div>
          <Hamburger
            id="mobile-menu"
            variant="light"
            className={cn({
              "!md:hidden fixed right-0 top-0 z-40 block p-4":
                !showContactModal,
              "": !showMobileHamburger && typeof y === "number" && y > 0,
              hidden: showContactModal,
            })}
            expanded={showMobileHamburger || showContactModal}
            toggle={() => {
              setMobileHamburgerVisibility(!showMobileHamburger);
            }}
          />
          <nav
            id="expanded-mobile-menu"
            className={cn(`hidden bg-transparent`, {
              "fixed left-0 top-0 z-20 !flex h-screen w-screen flex-col items-center justify-center gap-12 !bg-[rgba(47,85,114,0.8)]":
                showMobileHamburger,
            })}
          >
            <Button
              id="splash"
              className="min-w-[200px] rounded-md border border-white"
              onClick={() => scrollToSection("splash")}
            >
              Our Beginning
            </Button>
            <Button
              id="features"
              className="min-w-[200px] rounded-md border border-white"
              onClick={() => scrollToSection("features")}
            >
              Features
            </Button>
            <Button
              id="testimonials"
              className="min-w-[200px] rounded-md border border-white"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant="accent"
              className="min-w-[200px] rounded-md border border-white"
              onClick={() => setContactModalVisibility(true)}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
        <div className="hidden md:block">
          <div id="header-links" className="grid w-full">
            <div
              id="logo"
              className="z-30 mb-0 w-fit bg-[#2f5572] px-6 py-2 text-center text-lg leading-none text-white"
            >
              Clear View{" "}
              <span className="block text-2xl font-bold leading-none">
                Escapes
              </span>
            </div>
            <nav id="links" className={`flex gap-6 text-white`}>
              <button
                id="splash"
                className={cn(`font-semibold hover:text-[#d59541]`, {
                  "!text-[#d59541]": splashEntry?.isIntersecting,
                })}
                onClick={() => scrollToSection("splash")}
              >
                Our Beginning
              </button>
              <button
                id="features"
                className={cn(`font-semibold hover:text-[#d59541]`, {
                  "!text-[#d59541]": featuresEntry?.isIntersecting,
                })}
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
              <button
                id="testimonials"
                className={cn(`font-semibold hover:text-[#d59541]`, {
                  "!text-[#d59541]": testimonialsEntry?.isIntersecting,
                })}
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
        className="relative border-b-[10px] border-[#2f5572] bg-[url('/travel-site/hero-xs.jpg')] bg-cover bg-no-repeat py-32 transition-[background-image] duration-200 ease-in-out sm:bg-[url('/travel-site/hero-small.jpg')] md:bg-[url('/travel-site/hero-medium.jpg')] lg:bg-[url('/travel-site/hero-large.jpg')]"
      >
        <div className="z-10 mx-auto max-w-7xl overflow-hidden px-5 text-center">
          <h1 className="pb text-4xl font-normal text-[#2f5572] sm:text-7xl">
            Your Clarity.
          </h1>
          <h2 className="text-2xl font-normal text-[#2f5572] sm:mb-4 sm:text-5xl md:mb-8">
            One trip away.
          </h2>
          <p
            id="description"
            className="mx-auto my-4 max-w-md text-lg font-thin text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_10%)] sm:text-3xl md:mb-8"
          >
            We create soul restoring journeys that inspire you to be you.
          </p>
          <Button
            variant="large-accent"
            className="rounded text-lg"
            onClick={() => setContactModalVisibility(true)}
          >
            Get Started Today
          </Button>
        </div>
      </div>
      <div
        ref={splashRef}
        id="splash"
        className="bg-white px-0 py-8 md:py-[4.5rem]"
      >
        <div className="mx-auto max-w-screen-xl overflow-hidden px-5">
          <h2 className="mb-4 text-center text-3xl text-[#2f5572] sm:text-[2.875rem] md:mb-8">
            The first trip we planned{" "}
            <span className="font-semibold">was our own.</span>
          </h2>
          <h3 className="mb-4 text-center text-xl font-thin text-[#d59541] sm:text-3xl md:mb-8 lg:mx-auto lg:max-w-md">
            Ever since, we&rsquo;ve been working to make travel{" "}
            <span className="font-normal">better for everyone.</span>
          </h3>
          <div className="mx-auto mb-8 w-full text-center">
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
            className="mx-auto block md:flex lg:max-w-screen-xl"
          >
            <Image
              className="mb-8 block !w-auto self-start md:hidden"
              src="/travel-site/our-start-landscape.jpg"
              alt="Our founder, Jane Doe"
              width={800}
              height={491}
            />
            <Image
              className="mb-0 mr-8 hidden w-1/3 self-start md:block lg:hidden"
              src="/travel-site/our-start-portrait.jpg"
              alt="Our founder, Jane Doe"
              width={382}
              height={870}
            />
            <Image
              className="mb-0 mr-8 hidden w-1/3 self-start lg:block"
              src="/travel-site/our-start.jpg"
              alt="Our founder, Jane Doe"
              width={404}
              height={531}
            />
            <div className="w-auto md:w-2/3">
              <h2 className="mb-6 text-3xl text-[#2f5572] sm:text-[2.875rem]">
                Here's how we got started...
              </h2>
              <p className="mb-7 font-light leading-6 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
                <button className="font-bold text-[#d59541] underline">
                  quis nostrud exercitation
                </button>{" "}
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="mb-7 font-light leading-6 md:text-lg">
                Duis aute irure dolor in <strong>reprehenderit in</strong>{" "}
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="mb-7 font-light leading-6 md:text-lg">
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
        className="relative overflow-hidden bg-[#2f5572] px-5 py-8 md:py-[4.5rem]"
      >
        <div
          id="features-grid"
          className="mx-auto max-w-screen-xl md:grid md:grid-cols-2 md:gap-8 lg:gap-12"
        >
          <div className="relative col-span-2 mb-8 flex flex-col items-center justify-center">
            <Image
              className="mb-2 block w-16 sm:mb-0 sm:pr-6"
              src="/travel-site/icons/star.svg"
              alt="star"
              width={0}
              height={0}
            />
            <h2 className="text-center text-4xl text-white sm:text-6xl">
              Our <span className="font-semibold">Features</span>
            </h2>
          </div>
          <div className="mb-6 block border-b border-t border-gray-200 py-6 text-center text-white md:m-0 md:border-0 md:p-0">
            <div>
              <Image
                className="mx-auto w-20"
                src="/travel-site/icons/rain.svg"
                alt="rain"
                width={0}
                height={0}
              />
            </div>
            <p className="my-3 text-2xl">We'll Watch the Weather</p>
            <p className="font-light leading-6">
              Download our app and we'll send you a notice if it's about to rain
              in the next 20 minutes around your current location. A good rain
              can be refreshing, but sometimes you just want to stay dry.
            </p>
          </div>
          <div className="mb-6 block border-b border-gray-200 pb-6 text-center text-white md:m-0 md:border-0 md:p-0">
            <div>
              <Image
                className="mx-auto w-20"
                src="/travel-site/icons/globe.svg"
                alt="globe"
                width={0}
                height={0}
              />
            </div>
            <p className="my-3 text-2xl">Global Guides</p>
            <p className="font-light leading-6">
              We've scoured the entire planet for the best retreats and
              beautiful vistas. If there's a corner of the world you want to
              escape to we know the most scenic and inspiring locations.
            </p>
          </div>
          <div className="mb-6 block border-b border-gray-200 pb-6 text-center text-white md:m-0 md:border-0 md:p-0">
            <div>
              <Image
                className="mx-auto w-20"
                src="/travel-site/icons/wifi.svg"
                alt="wifi"
                width={0}
                height={0}
              />
            </div>
            <p className="my-3 text-2xl">Wi-fi Waypoints</p>
            <p className="font-light leading-6">
              We only send you on trips to places we can personally vouch for as
              being amazing. Which means we've mapped out where local wi-fi
              spots are and marked them in our app's map view.
            </p>
          </div>
          <div className="block text-center text-white md:m-0 md:p-0">
            <div>
              <Image
                className="mx-auto w-20"
                src="/travel-site/icons/fire.svg"
                alt="fire"
                width={0}
                height={0}
              />
            </div>
            <p className="my-3 text-2xl">Survival Kit</p>
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
        className="relative overflow-hidden bg-[#e0e6ef] py-8 md:py-[4.5rem] lg:bg-[url('/travel-site/testimonials-banner.jpg')]"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-28 flex items-center justify-center gap-2 md:mb-32">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <path
                d="M.72.08A.67.67 0 000 .8v46.48a.72.72 0 00.72.72H48l16 16V.72a.67.67 0 00-.72-.72H.8z"
                fill="#2f5572"
              />
            </svg>
            <h2 className="text-center text-4xl text-[#2f5572] md:text-6xl">
              Real <span className="font-semibold">Testimonials</span>
            </h2>
          </div>
          <div className="flex w-full grid-cols-3 flex-wrap gap-x-12 md:grid">
            <div className="mb-28 w-full bg-[rgba(255,255,255,0.8)] text-center">
              <div className="mx-5 pb-6">
                <Image
                  className="relative -top-[80px] mx-auto -mb-[80px] overflow-hidden rounded-full border-[6px] border-[rgba(255,255,255,0.8)]"
                  src="/travel-site/testimonial-jane.jpg"
                  alt="Jane Doe"
                  width={160}
                  height={160}
                />
                <p className="py-1 text-2xl font-medium leading-5 text-[#2f5572]">
                  Jane Doe
                </p>
                <div className="py-1 leading-5 text-[#d59541]">
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
            <div className="mb-28 w-full bg-[rgba(255,255,255,0.8)] text-center">
              <div className="mx-5 pb-6">
                <Image
                  className="relative -top-[80px] mx-auto -mb-[80px] overflow-hidden rounded-full border-[6px] border-[rgba(255,255,255,0.8)]"
                  src="/travel-site/testimonial-john.jpg"
                  alt="Jane Doe"
                  width={160}
                  height={160}
                />
                <p className="py-1 text-2xl font-medium leading-5 text-[#2f5572]">
                  John Smith
                </p>
                <div className="py-1 leading-5 text-[#d59541]">
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
            <div className="w-full bg-[rgba(255,255,255,0.8)] text-center md:mb-28">
              <div className="mx-5 pb-6">
                <Image
                  className="relative -top-[80px] mx-auto -mb-[80px] overflow-hidden rounded-full border-[6px] border-[rgba(255,255,255,0.8)]"
                  src="/travel-site/testimonial-cat.jpg"
                  alt="Jane Doe"
                  width={160}
                  height={160}
                />
                <p className="py-1 text-2xl font-medium leading-5 text-[#2f5572]">
                  Él Gato
                </p>
                <div className="py-1 leading-5 text-[#d59541]">
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
      <footer className="flex flex-col justify-center bg-[#2f5572] px-4 py-6 text-center font-extralight text-white md:flex-row md:items-center">
        <p className="pb-1 md:pb-0 md:after:content-['\00a0']">
          Copyright &copy; {new Date().getFullYear()} Clear View Escapes
        </p>
        <p className="before:content-['|\00a0']">All rights reserved</p>
      </footer>
    </main>
  );
};

export default TravelSitePage;
