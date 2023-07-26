import React from 'react';

const Filter = ({ onFilter, onSearch }) => {
  const handleFilter = (event) => {
    const selectedRegion = event.target.value;
    onFilter(selectedRegion);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <>
      <section className="filter">
        <form className="form-control">
          <input
            type="text"
            placeholder="Search for a country"
            id="search"
            onChange={handleSearch}
          />
        </form>
        <div>
          <label for="select"> </label>
          <select name="select" id="select" className="select" onChange={handleFilter}>
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Filter;
