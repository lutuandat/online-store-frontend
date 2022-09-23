import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'


interface HeaderState {
  navigationId: string;
}

export default class Header extends Component<{},HeaderState> {
  state = {
      navigationId: "",
  }

  render() {
    return (
      <header className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
        <div className="container">
          <a href="/"><img src="https://i.ibb.co/3Ntxv7d/logo.png" alt="logo"/></a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link to="/" className='nav-link'>Home</Link> */}
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link to="/" className='nav-link'>Home</Link> */}
              <a href="/collections" className="nav-link">Collections</a>
            </li>
            <li className="nav-item">
              {/* <Link to="/" className='nav-link'>Home</Link> */}
              <a href="/blog" className="nav-link">Blog</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}