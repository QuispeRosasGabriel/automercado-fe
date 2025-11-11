"use client";
import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({ filters, setFilters }) => {
  const [price, setPrice] = useState({
    min: filters.minPrice || 1000,
    max: filters.minPrice || 800000,
  });

  const handleOnChange = (value) => {
    setPrice(value);
  };

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      minPrice: price.min,
      maxPrice: price.max,
    }));
  }, [price, setFilters]);

  return (
    <div>
      <InputRange
        formatLabel={() => ``}
        maxValue={800000}
        minValue={1000}
        value={price}
        onChange={handleOnChange}
        id="slider"
      />
      <span id="slider-range-value1">${price.min.toLocaleString()}</span>
      <span id="slider-range-value2">${price.max.toLocaleString()}</span>
    </div>
  );
};

export default PriceRange;
