import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);


  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    console.log(data);
  }

  useEffect(function () {
    getAdvice();
  }, [])

  return (
    <div className="App">
     
      <div>
        <h1 className="h1-text">{advice}</h1>
        <button className="btn" onClick={getAdvice}>Get  advice</button>
        <Message count={count}/>
      </div>
      </div>
   
  );
}

function Message(props){
  return(
    <p className="message">
          You have read <strong> {props.count} </strong> pieces of advice
        </p>
  )
}

export default App;
