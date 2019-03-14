import React, {Component} from 'react';
import './Portfolio.css';
import PortfolioItem from "./PortfolioItem";
import portfolioData from '../../data/portfolioData';

export default class Portfolio extends Component {
  render() {
    return (
      <section className='portfolio' id='portfolio'>
        <div className="container">
          <h2>ПОРТФОЛИО</h2>
          <div className="portfolio__wrapper">
            {portfolioData.map((item, id) => {
              return(
                <PortfolioItem key={id} data={item}/>
              )
            })}
          </div>
        </div>
      </section>
    );
  }
}