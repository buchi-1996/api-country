import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  FormControl,
  MenuItem,
  Select,
  Grid,
  Container,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
import CountryCard  from './CountryCard';
import "./country.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent"
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    }
  }
});

function Country() {
  const [Countries, setCountries] = useState([]);
  const [select, setSelect] = useState("Filter by region");
  const [Search, setSearch] = useState("");

  const classes = useStyles();
  

  useEffect(() => {
    async function getCountries() {
      const response = await fetch("https://restcountries.eu/rest/v2/all/");
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
        callingCodes: data.callingCodes,
        alpha3Code: data.alpha3Code
      }));
      // console.log(resData);
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
              className="search__box"
              placeholder="Search for a country..."
            />
          </div>
          <div className="search__box2">
            <FormControl className={classes.root}>
              <Select
                variant="outlined"
                className="input__select"
                value={select}
                onChange={handleChange}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  }
                }}
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
          {filteredCountries.map((country, index) => {
            return <CountryCard key={index} {...country}/>
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Country;
