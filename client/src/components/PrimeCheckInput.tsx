import React from "react";
import { getCheckPrime } from "../services/PrimeService";
import "../App.css";
import { ResultText } from "./ResultText";
import { InputState, ResultData } from "../models/interfaces";


class PrimeCheckInput extends React.Component<{}, InputState> {
  state: InputState = {
    value: null,
    isPrime: null,
    error: false,
    inputValue: "",
    showResultText: false,
  };

  render() {

    /**
     * Reset states and update new inputValue.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        value: null,
        isPrime: null,
        inputValue: e.target.value,
        error: false,
        showResultText: false,
      });
    };


    /**
     * Check if inputValue is not empty and if it's number, before calling getCheckPrime.
     */
    const handleClick = (_: React.MouseEvent<HTMLElement>) => {

      if (!this.state.inputValue) return;

      const parsed = parseInt(this.state.inputValue);

      if (isNaN(parsed)) {
        this.setState({ error: true, showResultText: true });
      } else {
        getCheckPrime(parsed).then((result: ResultData) => {
          if (result && result.data) {
            this.setState({
              value: parsed,
              isPrime: result.data.isPrime,
              showResultText: true,
            });
          }
        }).catch(e => {
          console.error(e.response.data.error)
        });
      }
    };

    return (
      <div>
        <div>
          <p>Enter number to verify prime number</p>
          <input
            type="number"
            className="input"
            value={this.state.inputValue}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="button" onClick={handleClick}>
            Check
          </button>
        </div>
        {this.state.showResultText && (
          <ResultText
            value={this.state.value}
            isPrime={this.state.isPrime}
            error={this.state.error}
          /> 
        )} 
      </div>
    );
  }
}

export default PrimeCheckInput;
