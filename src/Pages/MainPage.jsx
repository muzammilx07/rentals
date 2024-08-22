import React, { useEffect, useState } from "react";
import NavbarMenu from "../Components/NavbarMenu";
import { useLocation } from "react-router-dom";
import Filter from "../Components/Filter";
import CardList from "../Components/CardList";
import { useSelector } from "react-redux";
import PropertyData from "../Data/data";

const MainPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const rentalData = useSelector((state) => state.customData.rentalData);
  const buyData = useSelector((state) => state.customData.buyData);
  const favouriteData = useSelector((state) => state.customData.favouriteData);

  const filteredData = useSelector((state) => state.filter.filteredData);
  const [dataToDisplay, setDataToDisplay] = useState(PropertyData);

  useEffect(() => {
    let data;

    switch (currentPath) {
      case "/buy":
        data = buyData;
        break;
      case "/favourite":
        data = favouriteData;
        break;
      case "/rent":
        data = rentalData;
        break;
      case "/":
      default:
        data = PropertyData;
        break;
    }
    if (filteredData.length > 0) {
      setDataToDisplay(filteredData);
    } else {
      setDataToDisplay(data);
    }
  }, [currentPath, filteredData, rentalData, buyData, favouriteData]);

  return (
    <div className="w-screen h-screen m-0 p-0 box-border flex flex-col overflow-x-hidden bg-background2">
      <div className="flex-none">
        <NavbarMenu />
        <Filter />
      </div>
      <div className="dataContainer flex-grow lg:px-52 lg:py-10  md-p-2 flex flex-col">
        <CardList properties={dataToDisplay || []} />
      </div>
      <footer className="m-8 flex justify-center">
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/muzammilx07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://simpleicons.org/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muzammil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://simpleicons.org/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
