import React from "react";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import "./header.css";

function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Container className="header__nav">
          <h3>where in the world?</h3>
          <div className="toggle__mode">
            <NightsStayOutlinedIcon className="night__icon" />{" "}
            <span>Dark Mode</span>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
