import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilteredData, setPropertyData } from "../Redux/Slices/filterSlice";
import { setRental, setBuy } from "../Redux/Slices/customData";
import propertyData from "../Data/data";
import FilterForm from "./FilterForm";

const Filter = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    city: "",
    priceRange: "",
    starRating: "",
    propertyType: "",
  });

  useEffect(() => {
    if (propertyData && propertyData.length > 0) {
      const categoryData = () => {
        const rental = propertyData.filter(
          (property) => property.category === "Rental"
        );
        const buy = propertyData.filter(
          (property) => property.category === "Available to Buy"
        );

        return { rental, buy };
      };

      const { rental, buy } = categoryData();

      dispatch(setPropertyData(propertyData));
      dispatch(setFilteredData(propertyData));
      dispatch(setRental(rental));
      dispatch(setBuy(buy));
    }
  }, [dispatch]); 

  const parsePrice = (price) => parseFloat(price.replace(/[$,]/g, ""));

  const getPriceRangeBounds = (priceRange) => {
    const ranges = {
      "$0 - $5000": [0, 5000],
      "$5000 - $10000": [5000, 10000],
      "$10000 - $15000": [10000, 15000],
      "$15000 - $20000": [15000, 20000],
      "$20000+": [20000, Infinity],
    };
    return ranges[priceRange] || [0, Infinity];
  };

  const applyCityFilter = (data, city) => {
    if (!city) return data;
    return data.filter((p) => p.city === city);
  };

  const applyPriceFilter = (data, priceRange) => {
    if (!priceRange) return data;

    const [minPrice, maxPrice] = getPriceRangeBounds(priceRange);
    const filtered = data.filter((p) => {
      const propertyPrice = parsePrice(p.price);
      return propertyPrice >= minPrice && propertyPrice <= maxPrice;
    });

    if (filtered.length === 0) {
      alert("No properties match the selected price range.");
      const { city, starRating, propertyType } = filters;
      return applyFilters({ city, priceRange: "", starRating, propertyType });
    }

    return filtered;
  };

  const applyStarRatingFilter = (data, starRating) => {
    if (!starRating) return data;

    const filtered = data.filter((p) => p.starRating === starRating);

    if (filtered.length === 0) {
      alert("No properties match the selected star rating.");
      const { city, priceRange, propertyType } = filters;
      return applyFilters({ city, priceRange, starRating: "", propertyType });
    }

    return filtered;
  };

  const applyPropertyTypeFilter = (data, propertyType) => {
    if (!propertyType) return data;

    const filtered = data.filter((p) => p.propertyType === propertyType);

    if (filtered.length === 0) {
      alert("No properties match the selected property type.");
      // Reset the propertyType filter and apply remaining filters
      const { city, priceRange, starRating } = filters;
      return applyFilters({ city, priceRange, starRating, propertyType: "" });
    }

    return filtered;
  };

  const applyFilters = (currentFilters) => {
    let filtered = propertyData;

    filtered = applyCityFilter(filtered, currentFilters.city);
    filtered = applyPriceFilter(filtered, currentFilters.priceRange);
    filtered = applyStarRatingFilter(filtered, currentFilters.starRating);
    filtered = applyPropertyTypeFilter(filtered, currentFilters.propertyType);

    return filtered;
  };

  const handleFilterChange = (filterName, value) => {
    const updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters);

    const newFilteredData = applyFilters(updatedFilters);
    if (newFilteredData.length === 0) {
      alert("No properties match the selected filters. Resetting filters.");
    } else {
      dispatch(setFilteredData(newFilteredData));
    }
  };

  const handleReset = () => {
    setFilters({
      city: "",
      priceRange: "",
      starRating: "",
      propertyType: "",
    });
    dispatch(setFilteredData(propertyData)); // Reset Redux state to original data
  };

  return (
    <FilterForm
      filters={filters}
      onFilterChange={handleFilterChange}
      onReset={handleReset}
    />
  );
};

export default Filter;
