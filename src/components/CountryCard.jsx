import React from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
  } from "@material-ui/core";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

import './countrycard.css';

function CountryCard({name, flag, population, region, capital}) {
  return (
    <Grid
      item
      key={name}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className="grid__flex"
    >
      <Card className="card__flex">
        <CardMedia
          style={{ height: "200px" }}
          image={flag}
          title={name}
        />
        <CardContent className="card__text">
          <h4>
            <Link to="/details" className="link">{name}</Link>
          </h4>
          <p>
            <label>Population:</label> <span>
              <NumberFormat
                value={population}
                displayType={"text"}
                thousandSeparator={true}
              />
            </span>
          </p>
          <p>
            <label>Region:</label> <span>{region}</span>
          </p>
          <p>
            <label>Capital:</label> <span>{capital}</span>
          </p>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CountryCard;
