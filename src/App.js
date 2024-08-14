import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav';
import Home from './Home';
import Projects from './Project';
import Resume from './Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <TopNav />
          <div className="content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
      
          
              <Route path="/" element={<Home />} /> 
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
