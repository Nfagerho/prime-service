export interface InputState {
    value: number | null,
    isPrime: boolean | null,
    inputValue: string,
    showResultText: boolean,
    error?: boolean,
    sum?: number | null
  };

export interface ResultData {
  data: {
    isPrime: boolean,
    sum?: number
  }
}

