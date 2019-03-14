import React, { Component } from 'react';
import navHeader from '../../data/navHeader';
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className="container">
          <div className="header__logo">
            Vavilov
          </div>
          <nav className="header__nav">
            <ul>
              {navHeader.map((nav, id) => {
                return(
                  <li key={`${id}-${nav.href}`}>
                    <a href={nav.href} title={nav.text}>{nav.text}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}