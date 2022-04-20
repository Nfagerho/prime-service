import React from "react";
import "./App.css";
import PrimeCheckInput from "./components/PrimeCheckInput";
import PrimeCheckAndSumInput from "./components/PrimeCheckAndSumInput";

export default function App() {

  return (
    
    <div className="App">
      <div className="header-text">Welcome to Nooa's prime number service!</div>
        <PrimeCheckInput/>
        <PrimeCheckAndSumInput/>
    </div>
  );
}
