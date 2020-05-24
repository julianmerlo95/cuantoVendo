import React from 'react';
import './Input.sass';

const Input = (props) => {

  const { type, placeholder, name, facturaHandler } = props;

  const onChangeHandler = (event) => {
    facturaHandler(event.target.name, event.target.value)
  }

  return (
    <div>
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChangeHandler(event)}
        required />
    </div>
  )
}

export default Input;