import React, { useState, useEffect } from 'react';
import { AppBar, Container, Toolbar, FormControl, MenuItem, Select, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import NumberFormat from 'react-number-format';
import './App.css';

function App() {
  const [Countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Filter by region');
  const [Search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [Regions, setRegions] = useState([]);
  

  useEffect(() => {
    async function getCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const resData = await response.json();
      const dataFile = resData.map(data => (

        {
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
          topLevelDomain: data.topLevelDomain

        }
      ))
      console.log(resData);
      setCountries(dataFile);
      
    };

    getCountries();
  }, []);

  useEffect(() => {
    const searchCountries = Countries.filter(country => country.name.toLowerCase().includes(Search.toLowerCase()));
    setFilteredCountries(searchCountries);
  }, [Search, Countries]);

 

  const handleChange = async (e) => {
    const region= e.target.value;
    console.log(country);

    const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
      const resData = await response.json();
      const dataFile = resData.map(data => (

        {
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
          topLevelDomain: data.topLevelDomain

        }
      ))
    
    setCountry(region);
    setRegions(dataFile);
  }

  const countriesToDisplay = (country === 'Filter by region') ? filteredCountries : Regions;

  return (
    <React.Fragment>
      <AppBar position="static" className="header">
        <Toolbar >
          <Container className="header__nav">
            <h3>where in the world?</h3>
            <div className="toggle__mode">
              <NightsStayOutlinedIcon className="night__icon" /> <span>Dark Mode</span>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className="form__row">
        <div className="search__area">
          <div className="search__box1">
            <SearchIcon className="search__icon" />
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="search__box  form-control" placeholder="Search for a country..." />
          </div>
          <div className="search__box2">
            <FormControl>
              <Select variant="outlined" className="input__select" value={country} onChange={handleChange}>
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
        <Grid container spacing={3} >
        
          {countriesToDisplay.map(country => {
            return( <Grid item key={country.name} xs={12} sm={6} md={4} lg={3} className="grid__flex">
              <Card className="card__flex">
                <CardMedia style={{ height: "200px" }}
                  image={country.flag}
                  title={country.name} />
                <CardContent className="card__text">
                  <h4>{country.name}</h4>
                  <p><label>Population:</label> <span><NumberFormat value={country.population} displayType={'text'} thousandSeparator={true} /></span></p>
                  <p><label>Region:</label> <span>{country.region}</span></p>
                  <p><label>Capital:</label> <span>{country.capital}</span> </p>
                </CardContent>
              </Card>
            </Grid>)
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
