// filtrer les movies
import React from 'react';
const Filter = ({ handleFilterTitle, handleFilterRating }) => {
    return (
    <div className="filter">
        <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => handleFilterTitle(e.target.value)}
        />
        <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => handleFilterRating(e.target.value)}
    />
    </div>
);
};

export default Filter;