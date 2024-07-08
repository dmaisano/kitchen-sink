import React from "react";
import Button from "./button";

interface QuoteProps {
  scrollToCheckout: () => void;
}

const Quote: React.FC<QuoteProps> = ({ scrollToCheckout }) => {
  return (
    <>
      <section
        id="quote"
        className="relative flex min-h-full flex-col items-center justify-center bg-[#201f2d]"
      >
        <div id="container" className="mx-auto text-white md:w-[600px]">
          <h2 className="mb-8 text-center text-3xl">
            What Our Premium Customers Say
          </h2>
          <div className="relative">
            <svg
              className="absolute -left-8 -top-2 md:-left-16 md:-top-4"
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="49"
            >
              <path
                d="M18.434 22.346a15.243 15.243 0 00-4.217-.617c-2.13 0-3.909.488-5.287 1.085 1.329-4.872 4.522-13.279 10.882-14.226A1.512 1.512 0 0021.045 7.5l1.39-4.979a1.513 1.513 0 00-1.25-1.905 10.546 10.546 0 00-1.421-.097c-7.635 0-15.197 7.98-18.387 19.404-1.873 6.703-2.422 16.78 2.191 23.123 2.582 3.549 6.348 5.444 11.195 5.633l.059.002c5.98 0 11.283-4.033 12.896-9.806.964-3.451.528-7.07-1.228-10.194-1.737-3.088-4.597-5.339-8.056-6.335zm37.434 6.336c-1.737-3.089-4.598-5.34-8.056-6.336a15.242 15.242 0 00-4.217-.617c-2.13 0-3.91.488-5.288 1.085 1.33-4.872 4.522-13.279 10.884-14.226A1.513 1.513 0 0050.423 7.5l1.39-4.979a1.513 1.513 0 00-1.25-1.905 10.532 10.532 0 00-1.421-.097c-7.635 0-15.196 7.98-18.388 19.404-1.872 6.703-2.421 16.78 2.193 23.124 2.581 3.548 6.348 5.444 11.194 5.633l.06.001c5.98 0 11.283-4.032 12.896-9.805a13.351 13.351 0 00-1.23-10.194z"
                fill="#FFF"
                opacity=".104"
              />
            </svg>
            <p className="mb-4 text-center text-lg text-gray-400 md:text-left">
              Lorem ipsum dolor sit amet, augue delectus cum ne, mazim numquam
              similique ne nec, eius eruditi fierent est no. Ius illud laudem
              torquatos cu, ex vix nobis splendide theophrastus. Vel id putent
              habemus, in expetenda reprimique usu. Ius dicta utinam principes
              eu, an pro semper labitur delicata. Nostro fierent vel ea, te eros
              delectus per
            </p>
            <p className="text-center text-xl font-semibold before:content-['-'] md:text-left">
              Tony Soprano
            </p>
          </div>
        </div>
      </section>
      <section
        id="still-thinking"
        className="relative flex min-h-full flex-col items-center justify-center bg-[#242333] text-white"
        style={{
          clipPath: `polygon(0 14%, 100% 0, 100% 100%, 0% 100%)`,
        }}
      >
        <div id="container" className="mx-auto w-full px-8 text-center">
          <h2 className="mb-4 text-4xl">Still Thinking?</h2>
          <p className="mb-4 text-xl">
            Don't waste your time - Get{" "}
            <span
              onClick={scrollToCheckout}
              className="cursor-pointer font-bold text-[#724cf9]"
            >
              Premium!
            </span>
          </p>
          <Button onClick={scrollToCheckout} className="w-52">
            Start Right Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default Quote;
