import React, { useEffect, useState } from 'react';
import data from '../data.json';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import Filter from './Filter';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setCountries(data);
    setFilteredCountries(data);
  }, []);

  const handleFilter = (region) => {
    if (region) {
      const filteredCountries = countries.filter((country) => country.region === region);
      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries(countries); // If no region selected, show all countries
    }
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredCountries = countries.filter(
        (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries(countries); // If no search term, show all countries
    }
  };

  const navigate = useNavigate(); // Get the navigate function for navigation

  const handleCountryClick = (countryName) => {
    // Navigate to the country page when the details div is clicked
    navigate(`/countries/${countryName}`);
  };

  return (
    <>
      <Filter onFilter={handleFilter} onSearch={handleSearch} />

      <section className='grid'>
        {filteredCountries.map((country) => {
          const { numericCode, name, population, region, capital, flag } = country;

          return (
            <article key={numericCode}>
              <div>
                <div className='flags'>
                  <img src={flag} alt={name} />
                </div>

                <div className='details' onClick={() => handleCountryClick(name)}>
                  <h3 className='country_name'>{name}</h3>
                  <h4>Population: <span>{population}</span> </h4>
                  <h4>Region: <span>{region}</span> </h4>
                  <h4>Capital: <span>{capital}</span></h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
