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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti dolores ducimus ex, fuga minus
            natus quae ratione sequi vel! Accusamus amet cumque cupiditate eum, expedita fugiat libero maxime mollitia
            natus non officia omnis quidem quo ratione recusandae repellat repudiandae sequi similique soluta suscipit
            unde velit vero, voluptate! Accusantium aperiam asperiores assumenda at commodi, consequatur deleniti,
            ducimus eum explicabo libero magni nesciunt nisi numquam, odio quam quidem quis quisquam quos reprehenderit
            voluptas. Ab ad dolore ducimus, eligendi expedita mollitia officia quo. Aliquam, dolor, ut? A accusantium
            atque, corporis deleniti ea esse, ex explicabo harum hic incidunt ipsum iste labore maxime mollitia numquam
            omnis pariatur praesentium rem saepe sed totam ut vero voluptas. Dolore hic inventore ipsam placeat
            praesentium quis voluptates?
          </div>
        </div>
      </section>
    );
  }
}