import "./Intro.scss";
import "./Align.scss";
import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <div className="align">
        <h2>Intro</h2>
        <h4>Who I am? I dont even know</h4>
      </div>
      <p className="align">
        I am from the city of <b className="intro__blue">Tuluá</b> and I had
        always wanted to know a bigger <br></br>
        city, so when the opportunity presented I came to study in Cali,{" "}
        <br></br>I like to play video games in my spare time as well as watch
        series. On <br></br>
        the weekends that I have the opportunity I like to go fishing and see{" "}
        <br></br>
        new places, later I would like to see the world and travel to many{" "}
        <br></br>
        countries.
      </p>
    </div>
  );
};

export default Intro;
