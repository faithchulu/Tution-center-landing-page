import React from "react";
import Home from "../pages/home";
import { Routes as RoutePath, Route, Link } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <RoutePath>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </RoutePath>
    </div>
  );
};

export default Routes;
