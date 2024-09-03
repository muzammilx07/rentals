import { useCallback } from "react";

const useFilteredData = (data, filters) => {
  const parsePrice = useCallback(
    (price) => parseFloat(price.replace(/[$,]/g, "")),
    []
  );

  const getPriceRangeBounds = useCallback((priceRange) => {
    const ranges = {
      "$0 - $5000": [0, 5000],
      "$5000 - $10000": [5000, 10000],
      "$10000 - $15000": [10000, 15000],
      "$15000 - $20000": [15000, 20000],
      "$20000+": [20000, Infinity],
    };
    return ranges[priceRange] || [0, Infinity];
  }, []);

  const applyCityFilter = useCallback((data, city) => {
    if (!city) return data;
    return data.filter((p) => p.city === city);
  }, []);

  const applyPriceFilter = useCallback(
    (data, priceRange) => {
      if (!priceRange) return data;

      const [minPrice, maxPrice] = getPriceRangeBounds(priceRange);
      return data.filter((p) => {
        const propertyPrice = parsePrice(p.price);
        return propertyPrice >= minPrice && propertyPrice <= maxPrice;
      });
    },
    [getPriceRangeBounds, parsePrice]
  );

  const applyStarRatingFilter = useCallback((data, starRating) => {
    if (!starRating) return data;
    return data.filter((p) => p.starRating === starRating);
  }, []);

  const applyPropertyTypeFilter = useCallback((data, propertyType) => {
    if (!propertyType) return data;
    return data.filter((p) => p.propertyType === propertyType);
  }, []);

  const applyFilters = useCallback(
    (data, currentFilters) => {
      let filtered = data;

      filtered = applyCityFilter(filtered, currentFilters.city);
      filtered = applyPriceFilter(filtered, currentFilters.priceRange);
      filtered = applyStarRatingFilter(filtered, currentFilters.starRating);
      filtered = applyPropertyTypeFilter(filtered, currentFilters.propertyType);

      return filtered;
    },
    [
      applyCityFilter,
      applyPriceFilter,
      applyStarRatingFilter,
      applyPropertyTypeFilter,
    ]
  );

  const filteredData = applyFilters(data, filters);

  return filteredData;
};

export default useFilteredData;
