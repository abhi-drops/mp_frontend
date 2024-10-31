import React, { useEffect, useRef } from 'react';
import { createAvatar } from '@dicebear/core';
import { rings } from '@dicebear/collection';

function CircleAvatarComponent({ seed,size }) {
  const avatarRef = useRef(null);

  useEffect(() => {
    const avatar = createAvatar(rings, {
      seed: seed,
      radius: 50,
      backgroundColor: ["b6e3f4"],
      ringColor: ["4db6ac", "4dd0e1", "4fc3f7", "64b5f6", "81c784", "aed581", "f06292", "ff8a65", "ffb74d"],
      ringFive: ["full"],
      ringFour: ["full"],
      ringOne: ["half"],
      ringThree: ["full", "half"],
      ringTwo: ["half"]
    });

    if (avatarRef.current) {
      avatarRef.current.innerHTML = avatar.toString();
    }
  }, [seed]);

  return (
    <div
      ref={avatarRef}
      // style={ size == "lg" ?{
      //   width: '1vh',
      //   borderRadius: '50%',
      //   overflow: 'hidden'
      // } : {width: '48px',
      //   height: '48px',
      //   borderRadius: '50%',
      //   overflow: 'hidden'}}
      className={`${size == 'md' ? "w-10" :"w-16" } rounded-full overflow-hidden`}
    />
  );
}

export default CircleAvatarComponent;
