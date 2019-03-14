import React, { Component } from 'react';
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";

export default class Main extends Component {
  render() {
    return (
      <main className='main'>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contacts/>
      </main>
    );
  }
}