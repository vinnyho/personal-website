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

          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none' 
          }}
          title="Resume"
        ></iframe>
      </div>
      

    </div>
  );
};

export default Resume;
