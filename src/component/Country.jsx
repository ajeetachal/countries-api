import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data.json';

const Country = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      // Filter the data from data.json based on the 'name' parameter
      const filteredCountry = data.find((country) => country.name === name);
      setCountryData(filteredCountry);
    };

    fetchCountryData();
  }, [name]);

  // Check if the data has been fetched before rendering
  if (!countryData) {
    return <div>Loading...</div>;
  }

  // Destructure the required information from the fetched data
  const { flag, population, nativeName, region, subregion, capital, topLevelDomain,  currencies, languages, borders } = countryData;

   // Select the first currency object and get its symbol
   const currencySymbol = currencies[0].code;
   const languagesName = languages[0].name;

  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
      <div className='country-box'>
        <div className='flag'>
        <img src={flag} alt={`flag of ${name}`}  />
        </div>
        <div>
        <h2>{name} </h2>
        <div className='aboutCountry'>
        <div>
        <p>Native Name: <span> {nativeName}</span></p>
        <p>Population: <span> {population}</span></p>
        <p>Region: <span> {region}</span></p>
        <p>Sub Region: <span> {subregion}</span></p>
        <p>Capital: <span> {capital}</span></p>
        </div>      
        <div >
        <p>Top Level Domain: <span> {topLevelDomain}</span></p>
        <p>Currencies: <span> {currencySymbol}</span></p>
        <p>Languages: <span> {languagesName}</span></p>
        </div>
        </div>
        {borders && borders.length > 0 && (
        <div className="borders-container">
          <p>Borders:</p>
          {borders.map((borderCountry, index) => (
            <div key={index} className="border-box">
              {borderCountry}
            </div>
          ))}
        </div>
      )}
        </div>
      </div>
    </>
  );
};

export default Country;
