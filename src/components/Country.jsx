import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  FormControl,
  MenuItem,
  Select,
  Grid,
  Container,
} from "@material-ui/core";
import CountryCard  from './CountryCard';
import "./country.css";

function Country() {
  const [Countries, setCountries] = useState([]);
  const [select, setSelect] = useState("Filter by region");
  const [Search, setSearch] = useState("");

  useEffect(() => {
    async function getCountries() {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const resData = await response.json();
      const dataFile = resData.map((data) => ({
        name: data.name,
        flag: data.flag,
        capital: data.capital,
        region: data.region,
        population: data.population,
        nativeName: data.nativeName,
        borderCountries: data.borders,
        languages: data.languages,
        currencies: data.currencies,
        subregion: data.subregion,
        topLevelDomain: data.topLevelDomain,
      }));
      console.log(resData);
      setCountries(dataFile);
    }

    getCountries();
  }, []);

  const handleChange = async (e) => {
    const region = e.target.value;
    setSelect(region);
    setSearch("");
  };

  const filteredCountries = Countries.filter((country) => {
    if (select === "Filter by region") {
      return country.name.toLowerCase().includes(Search.toLowerCase());
    } else {
      return (
        country.name.toLowerCase().includes(Search.toLowerCase()) &&
        country.region.toLowerCase().includes(select.toLowerCase())
      );
    }
  });

  return (
    <div>
      <Container maxWidth="lg" className="form__row">
        <div className="search__area">
          <div className="search__box1">
            <SearchIcon className="search__icon" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="search__box  form-control"
              placeholder="Search for a country..."
            />
          </div>
          <div className="search__box2">
            <FormControl className="select__form">
              <Select
                variant="outlined"
                className="input__select"
                value={select}
                onChange={handleChange}
              >
                <MenuItem value="Filter by region">Filter by region</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {filteredCountries.map((country) => {
            return <CountryCard {...country}/>
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Country;
