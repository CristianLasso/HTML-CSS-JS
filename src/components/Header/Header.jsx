import "./Header.scss";
import "./Icon.scss";
import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import Yo from "./yo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img
        src={Yo}
        alt="Smiley face"
        width="250"
        height="250"
        className="icon"
      />
      <div>
        <h2>Cristian Camilo</h2>
        <h1 className="header__blue">Lasso Hernandez</h1>
        <h4>Systems Engineering Student 8th Semester</h4>
      </div>
      <div>
        <Instagram
          onClick={() => {
            console.log("onClick");
            window.open("https://www.instagram.com/");
          }}
        >
          Instagram
        </Instagram>
        <Facebook
          onClick={() => {
            console.log("onClick");
            window.open("https://www.facebook.com/");
          }}
        >
          Facebook
        </Facebook>
      </div>
    </div>
  );
};

export default Header;
