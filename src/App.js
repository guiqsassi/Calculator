import { useState } from 'react';
import './App.css'
  
function App() {
  let [display, setDisplay] = useState("0")

  function Numbers(e){



    if(display === "0"){
      if(e=="."){
        setDisplay(display + e)
      }
      else{
        setDisplay(e)
      }
      
    }
    else{
      setDisplay(display + e)
    }
    
 
  }

  function opertator (operation){
    console.log(display)
    if(!display == ''){
    if(display.slice(-1) === "+" || display.slice(-1) === "-" ||display.slice(-1) === "/" || display.slice(-1) === "*" || display.slice(-1) === "%"){
    }
    else{
      setDisplay(display += `${operation}`)
    }} 
  }
  return (


    <div className="container">
         <div className='ball'>

  </div>
   
      <div className='calculator'>
          <div className='display'>
              <h1 className='displayText'>{display} </h1>
          </div>
          <div className='digits'>
            
             <div className='Numbers'>
              <button className='buttons'onClick={() =>{opertator("%")}}> %</button>
            <button className='buttons'onClick={() =>{ setDisplay('0')}}> CE </button>
               <button className='buttonsEsp'onClick={() =>{opertator("/") }}> / </button>
            <button className='buttons' onClick={() =>{ Numbers('7')}}> 7</button>
            <button className='buttons' onClick={() =>{ Numbers('8')}}> 8</button>
            <button className='buttons' onClick={() =>{ Numbers('9')}}> 9</button>
            <button className='buttons'onClick={() =>{ Numbers('4')}}> 4</button>
            <button className='buttons'onClick={() =>{ Numbers('5')}}> 5</button>
            <button className='buttons'onClick={() =>{ Numbers('6') }}> 6</button>
            <button className='buttons' onClick={() =>{ Numbers('1') }}> 1</button>
            <button className='buttons' onClick={() =>{ Numbers('2') }}> 2</button>
            <button className='buttons' onClick={() =>{ Numbers('3') }}> 3</button>
            <button className='buttonsEsp' onClick={() =>{ Numbers(".")}}> .</button>
            <button className='button0'onClick={() =>{ Numbers('0') }}> 0</button>

             </div>
             <div className='operations'> 
            <button className='buttonsEspLeft'onClick={() =>{ opertator("-") }}> -</button>
            <button className='buttonsEspLeft'onClick={() =>{ opertator("*")}}> X</button>
            <button className='buttonsLeft' onClick={() =>{  opertator("+") }}> +</button>
            <button className='buttonsLeft' onClick={() =>{ let resp = eval(display)
            setDisplay(resp.toString()) }}> =</button>
             </div>
          </div>
          
          
      </div>
    
    </div>
    
  );
}

export default App;
