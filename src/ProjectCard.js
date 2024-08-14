import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import topartists from './Assets/topartists.png';
import concerts from './Assets/concerts.png';
import toptrack from './Assets/toptrack.png';
import github from './Assets/github.png'
const ProjectCard = () => {
  return (
    <div className="card mb-3" style={{ height: '370px', width: '520px', border: '2px solid black' }}>
      <h1 
        className="card-title" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          fontSize: '30px', 
          borderBottom: '1px solid black',
          paddingBottom: '10px'
        }}
      >
        Spotify & Ticketmaster Info
      </h1>
      <div style={{ height: '300px', marginBottom:'1px solid black'}}>
        <div id="carouselExample" className="carousel slide" style={{ height: '100%' }}>
          <div className="carousel-inner" style={{ height: '90%' }}>
            <div className="carousel-item active">
              <img src={topartists} className="d-block w-100" alt="Top Artists" />
            </div>
            <div className="carousel-item">
              <img src={toptrack} style={{marginTop: '2px'}}className="d-block w-100" alt="Top Tracks" />
            </div>
            <div className="carousel-item">
              <img src={concerts} style={{marginTop: '5px'}}className="d-block w-100" alt="Concerts" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <a href="https://github.com/vinnyho/top-artist-songs-concerts" target="_blank" className="me-3" style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
                                <img src={github} alt="GitHub" style={{ width: '24px', height: '24px', }} />
                            </a>
        </div>
      </div>
      
        
    
    </div>
  );
};

export default ProjectCard;
