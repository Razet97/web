// src/components/Menu/Videos/SubMenuVideos/SubMenuVideos.js

import React from 'react';
import './SubMenuVideos.css';
import SubMenuVideosButton from './SubMenuVideosButton';

function SubMenuVideos() {
  return (
    <div className="sub-menu-videos">
      <SubMenuVideosButton label="Página principal de Videos" />
      <SubMenuVideosButton label="Vector" />
      <SubMenuVideosButton label="videos relacionados" />
      <SubMenuVideosButton label="Generador IA" />
    </div>
  );
}

export default SubMenuVideos;

