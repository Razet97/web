// src/components/Menu/Videos/SubMenuVideos/SubMenuVideosButton.js

import React from 'react';
import { Link } from 'react-router-dom'; // Si estás utilizando React Router para la navegación
import './SubMenuVideosButton.css';

function SubMenuVideosButton({ label }) {
  return (
    <Link to={`/${label.toLowerCase().replace(/\s/g, '-')}`} className="sub-menu-videos-button">
      {label}
    </Link>
  );
}

export default SubMenuVideosButton;
