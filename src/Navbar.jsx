// App.jsx

import React from 'react';
import './App.css';
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const navLinksData = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <div>
      <div className="navbar">
        <img src="bird_2.jpg" alt="logo" className="navbar-logo" />
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='login-btn'>
          <button>Login</button>
          <button>Signup</button>
        </div>
        <div className='Links'>
          {navLinksData.map((data, index) => (
            <Link key={index} to={data.link}>
              <p className='NavLinks'>{data.name}</p>
            </Link>
          ))}
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
