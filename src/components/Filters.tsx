import React from 'react';

interface FiltersProps {
  nameFilter: string;
  setNameFilter: (value: string) => void;
  
}

function Filters({
    nameFilter,
    setNameFilter,
  }: FiltersProps) {
    return (
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="nameFilter" className="filter-label">Filter by Name:</label>
          <input
            type="text"
            id="nameFilter"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="filter-input"
            placeholder="Enter name"
          />
        </div>

      </div>
    );
  }
  
  export default Filters;
  