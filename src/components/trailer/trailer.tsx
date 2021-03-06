import React, { useState } from 'react';

import './trailer.css';

export const Trailer = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div className="trailer">
      <div className="trailer__texture">
        <div className="texture-one"></div>
        <div className="sliders">
          <div className="top white"></div>
          <div className="bot-2"></div>
          <div className="bottom white"></div>
        </div>
        <div className="texture-two"></div>
      </div>
      <div className="trailer__title">
        <h1>Shoot</h1>
        <h1>Everything</h1>
      </div>
      <div className="trailer__video">
        <div className="trailer__video-btn">
          <button className={openVideo ? 'trailer__video-none' : ''} onClick={() => setOpenVideo(!openVideo)}></button>
        </div>
        <div className={openVideo ? 'trailer__video-active' : ''}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/MIK4D0kVlIs?autoplay=0&amp;rel=0&amp;fs=1&amp;enablejsapi=1&amp;widgetid=1"
            id="MIK4D0kVlIs-1"
            frameBorder="0"
            width={460}
            height={260}
            title="YouTube video player"
            referrerPolicy="no-referrer"></iframe>
            <div onClick={() => setOpenVideo(!openVideo)} className={openVideo ? 'trailer__video-decor' : ''}></div>
        </div>
      </div>
      <div className="bot-1 active"></div>
    </div>
  );
};
