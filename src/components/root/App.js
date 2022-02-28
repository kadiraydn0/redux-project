import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dasboard from "./Dasboard";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Dasboard />
      </Container>
    </div>
  );
}

export default App;
