import React from "react";
import PropertyCard from "./PropertyCard";

const CardList = ({ properties }) => {
  return (
    <div className="maindata rounded border-2 border-blue-500 p-4 flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))
      ) : (
        <p>No properties available</p>
      )}
    </div>
  );
};

export default CardList;
