import React from 'react';

import { Content } from './content';

import './home.css';

export const Home = () => {
  return (
    <div className="home">
      <video
        loop
        data-contentid="109434278"
        muted
        width={1920}
        height={1080}
        autoPlay
        preload="auto">
        <source
          src="https://cdn2.unrealengine.com/Odin/HomeAssets/RecallSection/RoboRecall_Web_720-7d9b3f832d0a8675685b1e02992ff4a39cb807f6.mp4"
          type="video/webm"
        />
        <source
          src="https://cdn2.unrealengine.com/Odin/HomeAssets/RecallSection/RoboRecall_Web_720-45e7298902d82cf7439a16dcd2889390e5a06732.webm"
          type="video/mp4"
        />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <Content />
    </div>
  );
};
