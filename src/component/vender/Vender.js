
import React, { useState } from 'react';
import Productos from '../productos/Productos';
import Input from '../UI/input/Input';
import './Vender.sass';

const Vender = () => {

  //STATE
  const [arrayFactura, setArrayFactura] = useState([]);
  const [arrayFacturaMes, setArrayFacturaMes] = useState([]);


  const [factura, setFactura] = useState({
    producto: "",
    cantidad: 0,
    precio: 0
  });

  //VARIABLES QUE MANEJAN LOS TOTALES POR AHORA
  let totalFactura = 0;
  arrayFactura.forEach(item => {
    totalFactura += parseInt(item.factura.precio)
    return totalFactura;
  })

  let totalMes = 0;
  arrayFacturaMes.forEach(item => {
    totalMes += parseInt(item.factura.precio)
    return totalMes;
  })

  //FUNCIONES
  const facturaHandler = (name, value) => {
    setFactura({ ...factura, [name]: value });
  }

  const addedProductHandler = () => {
    if (factura.producto != "" && factura.precio != 0) {
      setArrayFactura([...arrayFactura, { factura }]);
      setArrayFacturaMes([...arrayFacturaMes, { factura }]);
    } else {
      alert('El producto y cantidad no puede estar en 0');
    }
  }

  const onClickHandler = () => {
    setArrayFactura([])
  }

  let producto = null;
  if (arrayFactura.length !== 0) {
    producto = (
      <div>{
        arrayFactura.map((item, index) => {
          return (
            <Productos
              key={index}
              producto={item.factura.producto}
              cantidad={item.factura.cantidad}
              precio={item.factura.precio}
            />
          )
        })
      }</div>
    )
  }

  return (
    <div className="vender">
      <div className="vender__contenido__factura">
        <div>
          <h2 className="vender__contenido__factura__cliente">Cliente</h2>
          <Input type="text" placeholder="Nombre" name="nombre" />
          <Input type="text" placeholder="Correo" name="correo" />
          <Input type="text" placeholder="Telefono" name="telefono" />
        </div>
        <div>
          <h2 className="vender__contenido__factura__factura">Factura</h2>
          <Input type="text" placeholder="producto"
            name="producto" facturaHandler={facturaHandler} />
          <Input type="number" placeholder="cantidad"
            name="cantidad" facturaHandler={facturaHandler} />
          <Input type="number" placeholder="precio"
            name="precio" facturaHandler={facturaHandler} />
          <button className="vender__contenido__factura__button--agregar"
            onClick={addedProductHandler}>Agregar producto</button>
          <h4> {arrayFactura.length === 0 ? 'No hay productos cargados' : <span>{producto}</span>}</h4>
        </div>
        <div className="vender__contenido__factura__total--factura">
          <h2>Total factura: {totalFactura}</h2>
        </div>
        <div className="vender__contenido__factura__total--buttondown">
          <button onClick={onClickHandler}
            className="vender__contenido__factura__total--buttondown--cancelar">Cancelar</button>
          <button onClick={onClickHandler}
            className="vender__contenido__factura__total--buttondown--aceptar">Aceptar</button>
        </div>
      </div>
      <div className="vender__contenido__factura__dia">
        <h2>Total Factura dia: {totalMes}</h2>
      </div>
      <div className="vender__contenido__factura__mes">
        <h2>Total Factura mes: {totalMes}</h2>
      </div>
    </div>
  )
}

export default Vender;