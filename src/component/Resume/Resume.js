import React, {Component} from 'react';
import './Resume.css';
import resumeData from '../../data/resumeData';

export default class Resume extends Component {
  render() {
    return (
      <section className='resume' id='resume'>
        <div className="container">
          <h2>ЗНАНИЯ И УМЕНИЯ</h2>
          <div className="resume__wrapper">
            <div className="resume__item">
              <ul>
                {resumeData.map((li, id) => {
                  return(
                    <li key={id}>{li}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}