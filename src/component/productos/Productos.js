import React from 'react';
import './Productos.sass';

const Productos = (props) => {
  return (
    <div className="productos">
      <h2 className="productos__producto">{props.producto}</h2>
      <h2 className="productos__cantidad">{props.cantidad}</h2>
      <h2 className="productos__precio">{props.precio}</h2>
    </div>
  )
}

export default Productos;