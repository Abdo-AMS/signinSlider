import React, { useState } from "react";

import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import "./components/Form1.css"

function App() {
  const [currentForm, setCurrentForm] = useState('Register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "Register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;