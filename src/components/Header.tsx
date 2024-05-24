import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl items-center justify-between border-b border-gray-100 bg-background px-4 py-2 font-sans uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <Logo />
      <Nav />
      <style>{`
        .navlink {
          color: #214973;
          transition: color 0.3s ease;
        }
        .navlink:hover {
          color: #214973;
          transition: color 0.3s ease;
        }
      `}</style>
    </header>
  );
};

export default Header;
