import React from 'react';
import profilepic from './profilepic.JPG';

const Home = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'left', fontSize: '36px', marginLeft: '0px' }}>
        Hello, I am Vincent,
      </h1>
      <h2 style={{ textAlign: 'left', marginTop: '15px', marginLeft: '20px', fontSize: '20px' }}>
        a first-year majoring in CS at the University of California, Irvine. I hold interests in software engineering, data science,
        and tech.
      </h2>

      <div className="d-flex justify-content-start mt-3" style={{ marginLeft: '20px' }}>
        <a href="https://www.linkedin.com/in/vincent-ho-2a4429240/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-light me-2">LinkedIn</button>
        </a>
        
        <a href="https://github.com/vinnyho" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-outline-light">Github</button>
        </a>
      </div>

      <div className='d-flex justify-content-end'>
        <img 
          src={profilepic} 
          className="img-fluid" 
          style={{ marginTop: '20px', width: '300px', height: '300px', borderRadius: '50%', boxShadow: '0 10px 8px rgba(0,0,0,0.2)' }} 
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Home;
