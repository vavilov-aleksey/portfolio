import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../images/default.png';
import ReactSVG from 'react-svg';
import web from '../../images/web.svg';
import github from '../../images/github.svg';

export default class PortfolioItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string.isRequired,
      img: PropTypes.string
    })
  };

  render() {
    const {text, hrefSite, hrefGithub, img} = this.props.data;
    return (
      <div className='portfolio__item'>
        <img src={img ? img : defaultImg} alt=""/>
        {text}
        <div className="portfolio__wrapper-link">
          {hrefSite && <a href={hrefSite}
                          title={text}
                          target='_blank'
                          rel='noopener noreferrer'>
            <ReactSVG src={web} svgClassName='portfolio__svg'/>
            Сайт
          </a>}

          {hrefGithub && <a href={hrefGithub}
                            title={text}
                            target='_blank'
                            rel='noopener noreferrer'>
            <ReactSVG src={github} svgClassName='portfolio__svg'/>
            Github
          </a>}
        </div>
      </div>
    );
  }
}
