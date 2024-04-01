// src/components/Menu/Imagenes/ImagenesButton.js

import React, { useState } from 'react';
import './ImagenesButton.css';
import SubMenuImagenes from './SubMenuImagenes/SubMenuImagenes';

function ImagenesButton({ label }) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <div className="imagenes-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {label}
      {showSubMenu && <SubMenuImagenes />}
    </div>
  );
}

export default ImagenesButton;
