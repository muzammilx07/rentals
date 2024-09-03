import React from "react";
import NavbarMenu from "../Components/NavbarMenu";
import Filter from "../Components/Filter";

const MainPage = () => {

  return (
    <div className="w-screen h-screen m-0 p-0 box-border flex flex-col overflow-x-hidden bg-background2">
      <div className="flex-none">
        <NavbarMenu />
      </div>
      <Filter />
      <footer className="flex flex-col items-center justify-center p-8 ">
        <div className="flex items-center space-x-6 mb-4">
          <a
            href="https://github.com/muzammilx07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <img
              src="https://simpleicons.org/icons/github.svg"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muzammil/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <img
              src="https://simpleicons.org/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
        </div>
        <div className="text-sm">Version 2.0</div>
      </footer>
    </div>
  );
};

export default MainPage;
