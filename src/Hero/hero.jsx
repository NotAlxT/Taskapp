import React, { useState } from 'react';
import BackgroundChanger from './backgroundChanger';


function Hero() {
    const [background, setBackground] = useState(true);

    function handleBackgroundChange(newBackground) {
      setBackground(newBackground);
    }
  
    return (
      <div className="hero" style={{ backgroundImage: `url(${background})` }}>
        <BackgroundChanger onBackgroundChange={handleBackgroundChange} />
      </div>
    )
  }

export default Hero;