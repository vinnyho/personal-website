import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top" style={{ padding: '0.5rem 1rem' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ fontSize: '30px', fontWeight: 'bold', padding: '0.5rem 0' }}>
          Vincent Ho
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/home" style={{ fontSize: '14px' }}>Home</Link>
            <Link className="nav-link" to="/projects" style={{ fontSize: '14px' }}>Projects</Link>
            <Link className="nav-link" to="/resume" style={{ fontSize: '14px' }}>Resume</Link>
          
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
