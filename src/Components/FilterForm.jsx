import React from "react";
import { Button } from "@nextui-org/react";
import {
  cities,
  priceRanges,
  starRatings,
  propertyTypes,
} from "../Data/filter";

const FilterForm = ({ filters, onFilterChange, onReset }) => {
  return (
    <div className="p-4 flex justify-center">
      <form className="max-w-full mx-auto flex flex-wrap gap-4 items-end">
        {/* City Filter */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <select
            id="city"
            value={filters.city}
            onChange={(e) => onFilterChange("city", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="priceRange"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price Range
          </label>
          <select
            id="priceRange"
            value={filters.priceRange}
            onChange={(e) => onFilterChange("priceRange", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Price Ranges</option>
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Star Rating Filter */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="starRating"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Star Rating
          </label>
          <select
            id="starRating"
            value={filters.starRating}
            onChange={(e) => onFilterChange("starRating", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Star Ratings</option>
            {starRatings.map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div className="flex-1 min-w-[150px]">
          <label
            htmlFor="propertyType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Property Type
          </label>
          <select
            id="propertyType"
            value={filters.propertyType}
            onChange={(e) => onFilterChange("propertyType", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">All Property Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <Button
          type="button"
          onClick={onReset}
          className="self-end mt-4 px-6 py-2 text-sm bg-red-200"
        >
          Reset
        </Button>
      </form>
    </div>
  );
};

export default FilterForm;
