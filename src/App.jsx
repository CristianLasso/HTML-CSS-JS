import React from "react";
import Container from "./components/Container/Container";
import { AppContextWrapper } from "./store/AppContext";

const App = () => {
  return (
    <AppContextWrapper>
      <Container />
    </AppContextWrapper>
  );
};

export default App;
