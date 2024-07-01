import React from 'react';

interface FiltersProps {
    nameFilter: string;
    cityFilter: string;
    highlightOldest: boolean;
    setNameFilter: (value: string) => void;
    setCityFilter: (value: string) => void;
    setHighlightOldest: (value: boolean) => void;
    cities: string[];
  }
  
  function Filters({
    nameFilter,
    cityFilter,
   highlightOldest,
    setNameFilter,
    setCityFilter,
    setHighlightOldest,
    cities
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
        <div className="filter-group">
          <label htmlFor="cityFilter" className="filter-label">Filter by City:</label>
          <select
            id="cityFilter"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="filter-input"
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="filter-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={highlightOldest}
              onChange={(e) => setHighlightOldest(e.target.checked)}
              className="checkbox-input"
            />
            Highlight Oldest
          </label>
        </div>
      </div>
    );
  }
  
  export default Filters;
  