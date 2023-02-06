import React, { useState } from "react";
import Form from "./Components/Form";
import Result from "./Components/Result";
import './App.css';

function App() {
  const [state, setState]= useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    confirmPassword:"",
  });
  return (
    <div className="App">
    <Form inputs={state} setInputs={setState}/>
    <Result data={state}/>
  
    </div>
  );
}

export default App;
