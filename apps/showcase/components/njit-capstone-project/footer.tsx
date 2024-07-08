import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="py-4 text-center text-white">
      <h1 className="w-full py-1 text-2xl font-light tracking-widest">
        INSERT COMPANY
      </h1>
      <p className="pb-2">All Right Reserved</p>
    </footer>
  );
};

export default Footer;
