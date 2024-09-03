import React, { useState, useEffect } from "react";
import {useSelector } from "react-redux";
import FilterForm from "./FilterForm";
import CardList from "./CardList";
import useFilteredData from "../Hooks/useFilteredData";

const Filter = () => {
  const [page, setPage] = useState("");

  useEffect(() => {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const currentPage = pathParts[0]; 
    setPage(currentPage);
  }, []);

const dataToRender = useSelector((state) => state.data.dataToRender);
const rentalData = useSelector((state) => state.rental.rentalData);
const buyData = useSelector((state) => state.buy.buyData);
const favouriteData = useSelector((state) => state.favourite.favouriteData);

console.log("fv", favouriteData)

  const [filters, setFilters] = useState({
    city: "",
    priceRange: "",
    starRating: "",
    propertyType: "",
  });

  const selectedData =
    page === "rent"
      ? rentalData
      : page === "buy"
      ? buyData
      : page === "favourite"
      ? favouriteData
      : dataToRender;

  const filteredData = useFilteredData(selectedData, filters);
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [filterName]: value,
      };
      return updatedFilters;
    });
  };

  const handleReset = () => {
    setFilters({
      city: "",
      priceRange: "",
      starRating: "",
      propertyType: "",
    });
  };

  return (
    <>
      <FilterForm
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
      />
      <div className="dataContainer flex-grow lg:px-52 lg:py-10  md-p-2 flex flex-col">
        <CardList properties={filteredData || []} />
      </div>
    </>
  );
};

export default Filter;
