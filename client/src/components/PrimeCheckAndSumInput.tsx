import React from "react";
import { getPrimeAndSum } from "../services/PrimeService";
import "../App.css";
import { InputState, ResultData } from "../models/interfaces";
import { ResultText } from "./ResultText";

class PrimeCheckAndSumInput extends React.Component<{}, InputState> {
  state: InputState = {
    value: null,
    isPrime: null,
    inputValue: "",
    showResultText: false,
    sum: null,
  };

  render() {

    /**
     * Reset states and update new inputValue.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        isPrime: null,
        inputValue: e.target.value,
        sum: null,
        showResultText: false,
      });
    };


    /**
     * Trim unnecessary characters, parse numbers and collect them into an array
     * before calling getPrimeAndSum. 
     */
    const handleClick = (_: React.MouseEvent<HTMLElement>) => {
      const array = this.state.inputValue.match(/[0-9]+/g);
      const numberArray =
        array &&
        array.map((item: string) => {
          return parseInt(item);
        });

      if (array && array.length > 0) {
        getPrimeAndSum(numberArray).then((result: ResultData) => {
          if (result && result.data) {
            this.setState({
              isPrime: result.data.isPrime,
              sum: result.data.sum,
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
          <p>Add upp the numbers (like this: 2 + 4) and verify if the sum is prime number</p>
          <input
            type="text"
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
            sum={this.state.sum}
          />
        )}
      </div>
    );
  }
}

export default PrimeCheckAndSumInput;
