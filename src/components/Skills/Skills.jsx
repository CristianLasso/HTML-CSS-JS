import "./Skills.scss";
import "./show.css";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h2>Skills</h2>
        <h4>Is there something this boy doesn't do right?</h4>
      </div>
      <div>
        <div className="skills__separate">
          <div>
            <button
              id="button1"
              className="skills__white"
              onClick={() => {
                const modal_container1 = document.getElementById("modal1");
                modal_container1.classList.add("show");
              }}
            >
              <h2>Creativity</h2>
            </button>

            <div className="skills__percentage" id="modal1">
              <CircularProgress variant="determinate" value={80} />
              <button
                className="skills__white"
                id="close1"
                onClick={() => {
                  const modal_container1 = document.getElementById("modal1");
                  modal_container1.classList.remove("show");
                }}
              >
                <b className="skills__blue">80%</b>
              </button>
            </div>
          </div>
          <div>
            <button
              id="button2"
              className="skills__white"
              onClick={() => {
                const modal_container1 = document.getElementById("modal2");
                modal_container1.classList.add("show");
              }}
            >
              <h2>Problems Solver</h2>
            </button>
            <div className="skills__percentage" id="modal2">
              <CircularProgress variant="determinate" value={75} />
              <button
                className="skills__white"
                id="close2"
                onClick={() => {
                  const modal_container1 = document.getElementById("modal2");
                  modal_container1.classList.remove("show");
                }}
              >
                <b className="skills__blue">75%</b>
              </button>
            </div>
          </div>
        </div>
        <div className="skills__separate">
          <div>
            <button
              id="button3"
              className="skills__white"
              onClick={() => {
                const modal_container1 = document.getElementById("modal3");
                modal_container1.classList.add("show");
              }}
            >
              <h2>Photoshop</h2>
            </button>
            <div className="skills__percentage" id="modal3">
              <CircularProgress variant="determinate" value={50} />
              <button
                className="skills__white"
                id="close3"
                onClick={() => {
                  const modal_container1 = document.getElementById("modal3");
                  modal_container1.classList.remove("show");
                }}
              >
                <b className="skills__blue">50%</b>
              </button>
            </div>
          </div>
          <div>
            <button
              id="button4"
              className="skills__white"
              onClick={() => {
                const modal_container1 = document.getElementById("modal4");
                modal_container1.classList.add("show");
              }}
            >
              <h2>CSS and React</h2>
            </button>
            <div className="skills__percentage" id="modal4">
              <CircularProgress variant="determinate" value={20} />
              <button
                className="skills__white"
                id="close4"
                onClick={() => {
                  const modal_container1 = document.getElementById("modal4");
                  modal_container1.classList.remove("show");
                }}
              >
                <b className="skills__blue">20%</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
