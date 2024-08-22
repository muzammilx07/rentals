import React from "react";
import { FaStar, FaBed, FaBath, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../Redux/Slices/customData";

const PropertyCard = ({ property }) => {
  const {
    id,
    city,
    price,
    starRating,
    propertyType,
    beds,
    bathrooms,
    squareMeters,
    imageUrl,
    category,
  } = property;

  const dispatch = useDispatch();
  const favouriteData = useSelector((state) => state.customData.favouriteData);

  const isFavourite = favouriteData.some((fav) => fav.id === id);
  const starCount = parseInt(starRating.split(" ")[0], 10);

  const handleFavouriteClick = () => {
    console.log("Handle Favourite Click", { id, isFavourite });
    if (isFavourite) {
      dispatch(removeFavourite({ id }));
    } else {
      dispatch(addFavourite(property));
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-96">
      <img src={imageUrl} alt={city} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col overflow-auto max-h-80">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <h4 className="text-xl font-semibold">{city}</h4>
            {starCount > 0 && (
              <div className="ml-2 text-yellow-500 flex">
                {Array.from({ length: starCount }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            )}
          </div>
          <button
            onClick={handleFavouriteClick}
            className={`py-2 px-3 rounded-full focus:outline-none ${
              isFavourite ? "text-red-500" : "text-gray-600"
            }`}
          >
            <FaHeart
              className={isFavourite ? "text-red-500" : "text-gray-600"}
            />
          </button>
        </div>
        <p className="text-2xl font-bold text-gray-800 mb-2">{price}</p>
        <p className="text-gray-700 mb-1">Type: {propertyType}</p>
        <p className="text-gray-700 mb-1">Category: {category}</p>
        <div className="flex flex-wrap gap-4 mb-2">
          <div className="flex items-center">
            <FaBed className="text-gray-600" />
            <span className="ml-2 text-gray-700">{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="text-gray-600" />
            <span className="ml-2 text-gray-700">{bathrooms} Baths</span>
          </div>
        </div>
        <p className="text-gray-700">Size: {squareMeters} m²</p>
      </div>
    </div>
  );
};

export default PropertyCard;
