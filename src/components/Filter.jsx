import React from 'react'
import { Link } from 'react-router-dom';
const Filter = ({ setCategory, setBrand, setRatings }) => {
  return (
    <div className="products_head">
      <select onChange={(event) => setCategory(event.target.value)}>
        <option value="">Categories</option>
        <option value="TV">TV</option>
        <option value="Smartphone">Smartphone</option>
        <option value="Headphone">Headphone</option>
        <option value="Laptop">Laptop</option>
      </select>
      <select
        onChange={(event) => {
          setRatings(event.target.value);
        }}
      >
        <option value="">Ratings</option>
        <option value="4">⭐⭐⭐⭐+</option>
        <option value="3">⭐⭐⭐+</option>
        <option value="2">⭐⭐+</option>
        <option value="1">⭐+</option>
      </select>
    </div>
  );
};

export default Filter