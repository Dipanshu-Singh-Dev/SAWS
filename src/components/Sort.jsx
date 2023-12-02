import React from 'react'

const Sort = ({ handleSortChange }) => {
  return (
    <div className="products_body_line1">
      <div>
        <select className="products_body_sort" onChange={handleSortChange}>
          <option value="">Sort</option>
          <option value="name 1">A-Z</option>
          <option value="name -1">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Sort