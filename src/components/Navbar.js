import React from 'react';
import { Link } from 'react-router-dom';
import bok from '../images/x.png';
const Navbar = () => {
  const linkStyles = {
    fontFamily: 'Courier New, Courier, monospace',
  };

  const imageStyles = {
    borderRadius: '50%',
    height: '30px',
    width: '30px',
    fontWeight: 'bold',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/" style={linkStyles}>
          &nbsp;ALE<img src={bok} alt="profile" style={{ borderRadius: '100%', width: '50px', height: '50px' }} />
        </Link>

     

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
           
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Lodi" className="nav-link text-dark">Mga LODI ko</Link>
            </li>
          
            <li className="nav-item">
              <Link to="/Art" className="nav-link text-dark">Mga ART ko</Link>
            </li>
            <li className="nav-item">
              <Link to="/Kwento" className="nav-link text-dark">kWENTO KO SA Pagong</Link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
