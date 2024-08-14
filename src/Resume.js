// Resume.js
import React from 'react';
import resume from './Assets/VincentResume.pdf'; // Update the path to where you’ve uploaded your resume PDF

const Resume = () => {
  return (
    <div style={{ marginTop: '120px', padding: '20px', textAlign: 'center' }}>
      <div style={{ 
        width: '950px', // Fixed width
        height: '90vh', // Viewport height for a responsive design
        margin: '0 auto', // Center the container
        overflow: 'hidden' // Hide any overflow
      }}>
        <iframe
          src={resume}
          style={{ width: '90%', height: '100%', border: 'none' }}
          title="Resume"
        ></iframe>
      </div>
      
      <a
        href={resume}
        download
        style={{ textDecoration: 'none' }}
      >
        <button type="button" className="btn btn-outline-light" style={{ marginTop: '40px' }}>
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
