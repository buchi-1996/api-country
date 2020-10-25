import React from  "react";
import {
  Grid,
  Card,
  CardMedia,
  Button,
  Container,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";
import "./details.css";

function Details() {
  // const { name } = useParams();
 
  // const [country, setCountry] = useState([]);
  // const [border, setBorder] = useState([]);

  // useEffect(() => {
   
  //   async function country() {
  //     const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  //     const resData = await response.json();
  //     console.log(resData);
  //     setCountry(resData);
  //     setBorder(resData.borders);
  //   }

  //   country();
    
  // }, [name])

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
            <Card>
              <CardMedia
                style={{ height: "370px" }}
                title="country"
                image="https://restcountries.eu/data/usa.svg"
                className="country__flag"
              />
            </Card>
          </Grid>
          <Grid item className="left__col" xs={12} md={6}>
            <h2>Belgium</h2>
            <div className="country__info">
              <div className="country__info__left">
                <p>
                  <label>Native Name:</label> <span>Belgie</span>
                </p>
                <p>
                  <label>Population:</label> <span>13,319,599</span>
                </p>
                <p>
                  <label>Region:</label> <span>Europe</span>
                </p>
                <p>
                  <label>Sub-Region:</label> <span>Western Europe</span>
                </p>
                <p>
                  <label>Capital:</label> <span>Brussels</span>
                </p>
              </div>
              <div className="country__info__right">
                <p>
                  <label>Top Level Domain:</label> <span>.be</span>
                </p>
                <p>
                  <label>Currencies:</label> <span>Euro</span>
                </p>
                <p>
                  <label>Language:</label> <span>Dutch, French, German</span>
                </p>
              </div>
            </div>
            <div className="border__countries">
              <p>
                <label>Border Countries:</label> <span>France</span>
                <span>Germany</span>
                <span>Netherlands</span>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Details;
