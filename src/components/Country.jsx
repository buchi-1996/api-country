import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import NumberFormat from "react-number-format";
import {
  FormControl,
  MenuItem,
  Select,
  Grid,
  Card,
  CardMedia,
  Container,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
            <FormControl>
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
            return (
              <Grid
                item
                key={country.name}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="grid__flex"
              >
                <Card className="card__flex">
                  <CardMedia
                    style={{ height: "200px" }}
                    image={country.flag}
                    title={country.name}
                  />
                  <CardContent className="card__text">
                    <h4>
                      <Link to="/details">{country.name}</Link>
                    </h4>
                    <p>
                      <label>Population:</label>{" "}
                      <span>
                        <NumberFormat
                          value={country.population}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </span>
                    </p>
                    <p>
                      <label>Region:</label> <span>{country.region}</span>
                    </p>
                    <p>
                      <label>Capital:</label> <span>{country.capital}</span>{" "}
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Country;
