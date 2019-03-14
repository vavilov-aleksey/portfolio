import React, {Component} from 'react';
import contactsData from '../../data/contactsData';
import ReactSVG from 'react-svg';

import './Contacts.css'

export default class Contacts extends Component {
  render() {
    return (
      <section className='contacts' id='contacts'>
        <div className="container">
          <h2>КОНТАКТЫ</h2>
          <div className='contacts__wrapper'>
            {contactsData.map((item, id) => {
              return (
                <a href={item.href}
                   title={item.text}
                   key={`${id}`}
                   className="contacts__item"
                   target='_blank'
                   rel='noopener noreferrer'>
                  <ReactSVG
                    src={item.icon}
                    className='contacts__svg'
                  />
                  {item.text}
                </a>
              )
            })}</div>
        </div>
      </section>
    );
  }
}