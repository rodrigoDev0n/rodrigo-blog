import React, { useEffect, useState } from 'react';

export const Emoji = ({ emojis }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setPositions(generateRandomPositions());
    };

    window.addEventListener('resize', handleResize);

    setPositions(generateRandomPositions());

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateRandomPositions = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const positions = [];

    for (let i = 0; i < 100; i++) {
      const xPos = Math.random() * windowWidth;
      const yPos = Math.random() * windowHeight;
      positions.push({ left: xPos, top: yPos });
      console.log(positions)
    }


    return positions;
  };

  return (
      positions.map((index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            left: `${positions.left}px`,
            top: `${positions.top}px`,
            fontSize: '24px',
            pointerEvents: 'none',
          }}
          aria-label='emoji'
        >🤓{emojis}</span>
      ))
  );
}
