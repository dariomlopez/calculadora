import React from "react";
import "../styles/button.css"

function Button(properties) {

  const isOperator = value => {
    return isNaN(value) && (value !== ".") && (value!== "=");
  };

  return (
    <div
      className={`button-cont ${isOperator(properties.children) ? "operator" : ""}`.trimEnd()}
      onClick={() => properties.manageClic(properties.children)}
    >
      {properties.children}
    </div>
  );
}

export default Button;