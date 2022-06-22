import React from 'react';

import { Button } from '../..';

import arrow from '../../images/arrow.png';

import './content.css';

export const Content = () => {
  return (
    <div className="home__content">
      <div className="home__title">
        <img
          src="https://images.freeimages.com/images/large-previews/945/luci-my-pretty-kat-1468352.jpg"
          alt=""
        />
      </div>
      <div className="home__subtitle">
        <p>
          Robo Recall is an action-packed virtual reality first-person shooter built exclusively for
          Oculus. Explore realistic environments as an agent tasked with recalling rogue robots
          while unlocking an expanding arsenal of weapons.
        </p>
      </div>
      <div className="home__buttons">
        <Button className="home__btn">Get Robo Recall</Button>
        <Button className="home__btn">Get Oculus</Button>
      </div>
      <div className="scroll-down-wrapper">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};
