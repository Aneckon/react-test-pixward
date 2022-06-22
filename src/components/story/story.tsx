import React from 'react';
import { useSpring, animated } from 'react-spring';

import './story.css';

const calc = (x: any, y: any) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x: any, y: any) => `translate3d(${x / -10}px,${y / -10}px,0)`;

export const Story = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div className="story">
      <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div
          className="story__decor"
          style={{ transform: props.xy.interpolate(trans1) }}
        />
      </div>

      <div className="trailer__title story__title">
        <h1>Story</h1>
      </div>

      <div className="trailer__video-btn story__video-btn">
        <button></button>
      </div>
    </div>
  );
};
