import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'

 // import Footer from './Footer'
const NavPage = () => {
  return (
    <React.Fragment>
      <section>
         
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </section>
    </React.Fragment>
  );
};

export default NavPage;
