import React from 'react';
import resume from './Assets/VincentResume.pdf';

const Resume = () => {
  return (
    <div style={{ marginTop: '120px', padding: '20px', textAlign: 'center' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '950px', 
        height: '90vh', 
        margin: '0 auto', 
        overflow: 'hidden' 
      }}>
        <iframe
          src={resume}
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none' 
          }}
          title="Resume"
        ></iframe>
      </div>
      
      <a href={resume} download style={{ textDecoration: 'none' }}>
        <button type="button" className="btn btn-outline-light" style={{ marginTop: '40px' }}>
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
