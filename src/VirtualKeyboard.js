// src/VirtualKeyboard.js
import React, { useState, useEffect } from 'react';
import './VirtualKeyboard.css';

const keys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ['Space', 'Backspace']
];

const VirtualKeyboard = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === ' ') {
        setInput((prev) => prev + ' ');
      } else if (keys.flat().includes(key)) {
        setInput((prev) => prev + key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClick = (key) => {
    if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    } else if (key === 'Space') {
      setInput(input + ' ');
    } else {
      setInput(input + key);
    }
  };

  return (
    <div className="virtual-keyboard">
      <input type="text" value={input} readOnly />
      <div className="keyboard">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <button key={key} 
              className={key === 'Space' ? 'spacebar' : key === 'Backspace' ? 'backspace' : ''}
              onClick={() => handleClick(key)}>
                {key === 'Space' ? ' ' : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualKeyboard;
