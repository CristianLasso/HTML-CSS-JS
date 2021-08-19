import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Expertise from "../Expertise/Expertise";
import Skills from "../Skills/Skills";
import "./Container.scss";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Expertise />
      <Skills />
    </div>
  );
};

export default Container;
