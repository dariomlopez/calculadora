import React from "react";
import "../styles/clearButton.css"

const ClearButton = (properties) => (
  <div 
    className="clear-button"
    onClick={properties.manageClear}
  >
    {/* Como este botón no tiene diferentes valores podemos declarar aquí directamente su valor
    o hacerlo:
    (properties) => (
      <div className="clear-button">
      {properties.children} y en App.js ponerle su valor
      </div>
    ) */}
    Clear     
  </div>
);

export default ClearButton;