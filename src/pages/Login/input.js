import React from "react";
import './Login.css';

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <div>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
  );
};

export default Input;
