import React from "react";
import { AppBar, Container, Toolbar, Button } from "@material-ui/core";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import "./header.css";

function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Container className="header__nav">
          <h3>Where in the world?</h3>
          <Button className="night__btn">
          <div className="toggle__mode">
            <NightsStayOutlinedIcon className="night__icon" />
            Dark Mode
          </div>
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
