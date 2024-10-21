import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    inputRef.current.focus();
    inputRef.current.select();
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current.focus();
    inputRef.current.select();
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
    inputRef.current.focus();
    inputRef.current.select();
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
    inputRef.current.focus();
    inputRef.current.select();
  };
 
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value=0; 
    inputRef.current.focus();
    inputRef.current.select();
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
  	setResult(0);
    inputRef.current.focus();
    inputRef.current.select();
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Result : {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
