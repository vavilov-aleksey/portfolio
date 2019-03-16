import React, {Component} from 'react';
import './About.css';
import ava from '../../images/ava2.jpg';

export default class About extends Component {
  render() {
    return (
      <section className='about' id='about'>
        <div className='container'>
          <h2>ОБО МНЕ</h2>
          <img src={ava} alt=""/>
          <div className="about__desc">
            Привет! <br/>
            Меня зовут Алексей. Занимаюсь WEB разработкой сайтов 2 года, в основном Frontend. <br/>
            Основную часть своего рабочего времени верстаю сайты с Psd макетов. Хорошо знаком с Photoshop, Figma, Zeplin. <br/>
            Постоянно изучаю новые технологии, открываю для себя интересные библиотеки и фреймворки. <br/>
            Заинтересован в развитии и изучении Frontend направления. <br/>
            В настоящее время активно изучаю документацию и практикую React.js.
          </div>
        </div>
      </section>
    );
  }
}