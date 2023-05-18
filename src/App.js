import { useState } from 'react';
import './App.css'
  
function App() {
  let [display, setDisplay] = useState('')
  let [display2, setDisplay2] = useState('')
  let [resultado, setResultado] = useState("")
  return (


    <div className="container">
         <div className='ball'>

  </div>
   
      <div className='calculator'>
          <div className='display'>
              <h1 className='displayText'>{resultado} </h1>
              <h1 className='displayText'>{display} </h1>
          </div>
          <div className='digits'>
            
             <div className='Numbers'>
              <button className='buttons'onClick={() =>{ 
                  setDisplay(display += "% ")
             }}> %</button>
            <button className='buttons'onClick={() =>{ setDisplay("") }}> CE </button>
               <button className='buttonsEsp'onClick={() =>{ setDisplay(display += " / ") }}> / </button>
            <button className='buttons' onClick={() =>{ setDisplay(display += "7") }}> 7</button>
            <button className='buttons' onClick={() =>{ setDisplay(display += "8") }}> 8</button>
            <button className='buttons' onClick={() =>{ setDisplay(display += "9") }}> 9</button>
            <button className='buttons'onClick={() =>{ setDisplay(display += "4") }}> 4</button>
            <button className='buttons'onClick={() =>{ setDisplay(display += "5") }}> 5</button>
            <button className='buttons'onClick={() =>{ setDisplay(display += "6") }}> 6</button>
            <button className='buttons' onClick={() =>{ setDisplay(display += "1") }}> 1</button>
            <button className='buttons' onClick={() =>{ setDisplay(display += "2") }}> 2</button>
            <button className='buttons' onClick={() =>{ setDisplay(display += "3") }}> 3</button>
            <button className='buttonsEsp' onClick={() =>{ setDisplay(display += ".") }}> .</button>
            <button className='button0'onClick={() =>{ setDisplay(display += "0") }}> 0</button>

             </div>
             <div className='operations'> 
            <button className='buttonsEspLeft'onClick={() =>{ setDisplay(display += " - ") }}> -</button>
            <button className='buttonsEspLeft'onClick={() =>{ setDisplay(display += " * ") }}> X</button>
            <button className='buttonsLeft' onClick={() =>{ setDisplay(display += " + ") }}> +</button>
            <button className='buttonsLeft' onClick={() =>{ let resultado = (eval(display)) 
            setDisplay(resultado)
            }}> =</button>
             </div>
          </div>
          
          
      </div>
    
    </div>
    
  );
}

export default App;
