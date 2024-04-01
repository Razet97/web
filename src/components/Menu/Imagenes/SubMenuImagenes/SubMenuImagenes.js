// src/components/Menu/Imagenes/SubMenuImagenes/SubMenuImagenes.js

import React from 'react';
import './SubMenuImagenes.css';
import SubMenuImagenesButton from './SubMenuImagenesButton';

function SubMenuImagenes() {
  return (
    <div className="sub-menu-imagenes">
      <SubMenuImagenesButton label="Página principal de Imágenes" />
      <SubMenuImagenesButton label="Vector" />
      <SubMenuImagenesButton label="Ilustraciones" />
      <SubMenuImagenesButton label="Generador IA" />
    </div>
  );
}

export default SubMenuImagenes;
