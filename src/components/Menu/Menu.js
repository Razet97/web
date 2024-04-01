// Menu.js

import React from 'react';
import './Menu.css';
import ImagenesButton from './Imagenes/ImagenesButton';
import VideosButton from './Videos/VideosButton';

function Menu() {
  return (
    <div className="menu">
      <ImagenesButton label="Imagenes" />
      <VideosButton label="Videos" />
    </div>
  );
}

export default Menu;
