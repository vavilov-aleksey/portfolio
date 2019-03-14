import React, {Component} from 'react';
import './Resume.css';
import resumeData from '../../data/resumeData';

export default class Resume extends Component {
  render() {
    return (
      <section className='resume' id='resume'>
        <div className="container">
          <h2>РЕЗЮМЕ</h2>
          <div className="resume__wrapper">
            {resumeData.map((item, id) => {
              return(
                <div className="resume__item" key={id}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.arrItem.map((li, id) => {
                      return(
                        <li key={id}>{li}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  }
}