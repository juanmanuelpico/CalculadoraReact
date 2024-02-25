import './App.css';
import Logo from './imagenes/logo.png'
import { Boton } from './componentes/Boton.js';
import { Pantalla } from './componentes/Pantalla.js';
import { BotonClear } from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const reiniciar = () =>{
    setInput('');
  };

  const calcularResultado = () =>{
    if(input){
      if(isNaN(input)){
        setInput(evaluate(input));
      }
   }else{
    alert('Por favor ingrese un valor');
   }
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={Logo}
        className='freecodecamp-logo'
        alt='freeCodeCamp logo' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic = {reiniciar}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
