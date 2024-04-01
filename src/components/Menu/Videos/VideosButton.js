// src/components/Menu/Videos/VideosButton.js

import React, { useState } from 'react';
import './VideosButton.css';
import SubMenuVideos from './SubMenuVideos/SubMenuVideos';

function VideosButton({ label }) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <div className="videos-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {label}
      {showSubMenu && <SubMenuVideos />}
    </div>
  );
}

export default VideosButton;
