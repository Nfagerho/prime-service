import React from "react";
import "../App.css";

export type ResultTextProps = {
  value: number | null,
  isPrime: boolean | null,
  error?:  boolean,
  sum?: number | null
}


export const ResultText: React.FC<ResultTextProps> = ( props: ResultTextProps ) => {
  const { value, isPrime, sum, error } = props;

  let resultText = "";
  let classValue = "";

  // Yeah, I know. This is a bit smelly.
  if (isPrime && sum && isPrime) {
    resultText = `Sum is:${sum} and it's a prime number!`;
    classValue = "success panel";
  } else if (sum && !isPrime) {
    resultText = `Sum is ${sum} and it isn't a prime number`;
    classValue = "error panel";
  } else if (isPrime) {
    resultText = `${value} is a prime number!`;
    classValue = "success panel";
  } else if (!isPrime) {
    resultText = `${value} is not a prime number`;
    classValue = "error panel";
  } else if (error) {
    resultText = `${value} is not a number`;
    classValue = "error panel";

  }

  return <div className={classValue}>{resultText}</div>;
};
