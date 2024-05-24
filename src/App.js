import "./App.css";
import Button from "./assets/button";
import ScreenResult from "./assets/screen";
import ClearButton from "./assets/clearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");
  const addInput = value => {
    setInput(input + value);
  };
  const result = () => {
    if (input == ""){
      alert("Ingrese algún valor")
    } else {
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <h1 className="title">Calculadora</h1>
      <div className="calculator-container">
        <ScreenResult input={input}/>
        <div className="row">
          <Button manageClic={addInput}>2</Button>
          <Button manageClic={addInput}>3</Button>
          <Button manageClic={addInput}>1</Button>
          <Button manageClic={addInput}>+</Button>
        </div>
        <div className="row">
          <Button manageClic={addInput}>4</Button>
          <Button manageClic={addInput}>5</Button>
          <Button manageClic={addInput}>6</Button>
          <Button manageClic={addInput}>-</Button>
        </div>
        <div className="row">
          <Button manageClic={addInput}>7</Button>
          <Button manageClic={addInput}>8</Button>
          <Button manageClic={addInput}>9</Button>
          <Button manageClic={addInput}>*</Button>
        </div>
        <div className="row">
          <Button manageClic={addInput}>.</Button>
          <Button manageClic={addInput}>0</Button>
          <Button manageClic={result}>=</Button>
          <Button manageClic={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton manageClear={() => setInput("")}></ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
