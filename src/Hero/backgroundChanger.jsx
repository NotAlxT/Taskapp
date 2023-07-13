import React from 'react';
import img1 from '../img/bg1.gif'
import img2 from '../img/bg2.gif'

function BackgroundChanger({ onBackgroundChange }) {
  function handleChange(event) {
    const newBackground = event.target.value; // Retrieve the selected background value
    onBackgroundChange(newBackground);
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value={img1} >Background 1</option>
        <option value={img2}>Background 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default BackgroundChanger;