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
        "fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-[rgba(255,255,255,0.95)]",
        {
          hidden: !showContactModal,
        },
      )}
    >
      <Hamburger
        id="contact-menu"
        variant="dark"
        className={cn(`hidden`, {
          "fixed right-0 top-0 z-[100] !block p-4": showContactModal,
        })}
        expanded={showContactModal}
        toggle={toggleContactFormVisibility}
      />
      <div className="mx-auto max-w-screen-xl overflow-hidden px-5">
        <div className="mb-8 flex flex-col items-center">
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
          <h2 className="text-4xl text-[#2f5572]">
            Get in <span className="font-semibold">Touch</span>
          </h2>
        </div>
        <p className="mx-auto max-w-[400px] text-center text-xl">
          We will have an online order system in place soon. Until then, connect
          with us on any of the platforms below!
        </p>
        <div id="socials" className="m-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Button
            variant="accent"
            className="flex items-center justify-center rounded-lg"
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
            className="flex items-center justify-center rounded-lg"
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
            className="flex items-center justify-center rounded-lg"
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
            className="flex items-center justify-center rounded-lg"
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
