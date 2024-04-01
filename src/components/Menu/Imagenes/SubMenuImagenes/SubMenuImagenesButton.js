// src/components/Menu/Imagenes/SubMenuImagenes/SubMenuImagenesButton.js

import React from 'react';
import './SubMenuImagenesButton.css';

function SubMenuImagenesButton({ label }) {
  // Aquí puedes agregar el enlace a la vista correspondiente
  const handleClick = () => {
    console.log(`Redireccionando a ${label}`);
  };

  return (
    <button className="sub-menu-imagenes-button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default SubMenuImagenesButton;
