import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="/cart" exact element={<CartDetail />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
