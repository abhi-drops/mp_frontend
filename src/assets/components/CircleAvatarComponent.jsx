import React, { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { rings } from '@dicebear/collection';

function CircleAvatarComponent({ seed, size }) {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const svgString = createAvatar(rings, {
      seed: seed,
      radius: 50,
      idPrefix: 'circle-avatar',
      backgroundColor: ["b6e3f4"],
      ringColor: ["4db6ac", "4dd0e1", "4fc3f7", "64b5f6", "81c784", "aed581", "f06292", "ff8a65", "ffb74d"],
      ringFive: ["full"],
      ringFour: ["full"],
      ringOne: ["half"],
      ringThree: ["full", "half"],
      ringTwo: ["half"]
    }).toString();

    // Convert SVG to data URL
    const encodedSvg = encodeURIComponent(svgString);
    setAvatarUrl(`data:image/svg+xml,${encodedSvg}`);
  }, [seed]);

  const avatarSize = size === 'md' ? '36px' : '48px';

  return (
    <img
      src={avatarUrl}
      alt="Circle Avatar"
      style={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );
}

export default CircleAvatarComponent;
