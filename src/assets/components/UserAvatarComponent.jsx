import { personas } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import React, { useEffect, useRef } from 'react'

function UserAvatarComponent({ seed,size }) {
  const avatarRef = useRef(null);

  useEffect(() => {
    const avatar = createAvatar(personas, {
      seed: seed,
      radius: 50,
      idPrefix: 'user-avatar',
      backgroundColor: ["b6e3f4","d1d4f9"],
      mouth: ["bigSmile","lips","smile","smirk"]
    });

    if (avatarRef.current) {
      avatarRef.current.innerHTML = avatar.toString();
    }
  }, [seed]);

  return (
    <div
      ref={avatarRef}

      className={`${size == 'md' ? "w-36 " :"w-10 " } rounded-full overflow-hidden `}
    />
  );
}

export default UserAvatarComponent