import react, { useState } from "react";
import "./App.css";
function App() {
  const [calculatrice, setCalculatrice] = useState("");
  const handelcalcul=(e)=>{
    setCalculatrice(calculatrice+e.target.innerHTML);
   }
  const resultat=()=>{
    console.log(calculatrice);
   var x="";
   var y="";
   var z="";
   var a=0;
      for (let i = 0; i < calculatrice.length; i++) {
      if (!Number.isInteger(parseInt(calculatrice[i]))){
         x=calculatrice.slice(0,i);
         y=calculatrice.slice(i+1);
         z=calculatrice[i];
      }
  
      }
      if(z==="+"){
      a=parseInt(y)+parseInt(x)
      }else if(z==="-"){
      a=parseInt(x)-parseInt(y)   
      }else if(z==="*"){
      a=parseInt(x)*parseInt(y);
      }else{
      a=parseInt(x)/parseInt(y);    
      }
      
      setCalculatrice(a.toString());
    
    }
   

  return (
    <>
    <div className="bg">
      <h1>Calculator</h1>
    <div className="calculator">
  <div className="output">
    <span className="result" >{calculatrice}</span>
  </div>
  <div className="buttons">
    <button  onClick={handelcalcul}>1</button>
    <button onClick={handelcalcul}>2</button>
    <button onClick={handelcalcul}>3</button>
    <button onClick={handelcalcul}>+</button>
    <button onClick={handelcalcul}>4</button>
    <button onClick={handelcalcul}>5</button>
    <button onClick={handelcalcul}>6</button>
    <button onClick={handelcalcul}>-</button>
    <button onClick={handelcalcul}>7</button>
    <button onClick={handelcalcul}>8</button>
    <button onClick={handelcalcul}>9</button>
    <button onClick={handelcalcul}>*</button>
    <button className="bg-red" onClick={(e)=>setCalculatrice("")} >C</button>
    <button onClick={handelcalcul}>0</button>
    <button className="bg-green" onClick={resultat}>=</button>
    <button onClick={handelcalcul}>/</button>
  </div>
</div>
</div>

</>
  );
}

export default App;
