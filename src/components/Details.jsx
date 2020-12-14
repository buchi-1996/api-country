import React, { useState, useEffect } from "react";
// import axios from 'axios';
import { Grid, Card, CardMedia, Button, Container } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link, useParams } from "react-router-dom";
import NumberFormat from "react-number-format";
import "./details.css";

function Details() {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([]); 

  useEffect(() => {
    const countryFetch = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const resData = await response.json();
      console.log(resData[0]);

      setCountry(resData[0]);
      setCurrencies(resData[0].currencies);
      setLanguages(resData[0].languages);
      

      const borderLink = "https://restcountries.eu/rest/v2/alpha?codes=";
      const borderUrl = resData[0].borders.join(';');
      const borderResponse = await fetch(`${borderLink}${borderUrl}`);
      const borderData = await borderResponse.json();
      

      if(borderResponse.ok){
        setBorders(borderData);
      }else{
        setBorders([]);
      }
    };

    countryFetch();
  }, [name]);

  return (
    <Container maxWidth="lg">
      <Link to="/" className="back__link">
        <Button
          variant="contained"
          color="secondary"
          className="details__btn"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </Link>
      <div className="description__area">
        <Grid container spacing={3}>
          <Grid item className="right-col" xs={12} md={6}>
            <Card className="des__card">
              <CardMedia
                style={{ height: "50vh"}}
                title={country.name}
                image={country.flag}
                className="country__flag"
              />
            </Card>
          </Grid>
          <Grid item className="left__col" xs={12} md={6}>
            <h2>{country.name}</h2>
            <div className="country__info">
              <div className="country__info__left">
                <p>
                  <label>Native Name:</label> <span>{country.nativeName}</span>
                </p>
                <p>
                  <label>Population:</label> <span>
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
                  <label>Sub-Region:</label> <span>{country.region}</span>
                </p>
                <p>
                  <label>Capital:</label> <span>{country.capital}</span>
                </p>
              </div>
              <div className="country__info__right">
                <p>
                  <label>Top Level Domain:</label> <span>{country.topLevelDomain}</span>
                </p>
                <p>
                  <label>Currencies:</label> <span>{currencies.map((x) => x.name).join(', ')}</span>
                </p>
                <p>
                  <label>Language:</label>  <span>{languages.map((x) => x.name).join(', ')}</span>
                </p>
              </div>
            </div>
            <div className="border__countries">
  <label>Border Countries:</label> <p>{borders.map((x, index)=> (<Link to={`/details/${x.name}`}  key={index} className="border__link"><span className="border">{x.name}</span></Link>))}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Details;
