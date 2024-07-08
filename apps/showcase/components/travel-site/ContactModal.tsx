import { cn } from "@repo/ui/utils";
import React from "react";
import Hamburger from "./Hamburger";
import Image from "next/image";
import Button from "./Button";

interface ContactModalProps {
  showContactModal: boolean;
  toggleContactFormVisibility: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  showContactModal,
  toggleContactFormVisibility,
}) => {
  return (
    <div
      id="contact-modal"
      className={cn(
        "z-40 fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(255,255,255,0.95)]",
        {
          hidden: !showContactModal,
        },
      )}
    >
      <Hamburger
        id="contact-menu"
        variant="dark"
        className={cn(`hidden`, {
          "z-[100] !block fixed top-0 right-0 p-4": showContactModal,
        })}
        expanded={showContactModal}
        toggle={toggleContactFormVisibility}
      />
      <div className="px-5 mx-auto overflow-hidden max-w-screen-xl">
        <div className="flex flex-col items-center mb-8">
          <svg
            className="mb-4"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="48"
          >
            <path
              d="M0 0v8l32 16L64 8V0H0zm0 16v32h64V16L32 32z"
              fill="#2f5572"
            />
          </svg>
          <h2 className="text-[#2f5572] text-4xl">
            Get in <span className="font-semibold">Touch</span>
          </h2>
        </div>
        <p className="text-center max-w-[400px] mx-auto text-xl">
          We will have an online order system in place soon. Until then, connect
          with us on any of the platforms below!
        </p>
        <div id="socials" className="grid grid-cols-2 gap-3 m-8 md:grid-cols-4">
          <Button
            variant="accent"
            className="rounded-lg flex items-center justify-center"
          >
            <Image
              className="!w-auto"
              src="/travel-site/icons/facebook.svg"
              alt="facebook"
              width={0}
              height={0}
            />
          </Button>
          <Button
            variant="accent"
            className="rounded-lg flex items-center justify-center"
          >
            <Image
              className="!w-auto"
              src="/travel-site/icons/twitter.svg"
              alt="twitter"
              width={0}
              height={0}
            />
          </Button>
          <Button
            variant="accent"
            className="rounded-lg flex items-center justify-center"
          >
            <Image
              className="!w-auto"
              src="/travel-site/icons/instagram.svg"
              alt="instagram"
              width={0}
              height={0}
            />
          </Button>
          <Button
            variant="accent"
            className="rounded-lg flex items-center justify-center"
          >
            <Image
              className="!w-auto"
              src="/travel-site/icons/youtube.svg"
              alt="youtube"
              width={0}
              height={0}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
