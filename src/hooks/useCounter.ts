import { Dispatch, SetStateAction, useState } from "react";

interface ReturnType {
  count: number;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
  reset: () => void;
}

function useCounter(initialValue?: number): ReturnType {
  const [count, setCount] = useState(initialValue || 0);

  const increment = (value = 1) =>
    setCount((currentValue) => currentValue + value);
  const decrement = (value = 1) =>
    setCount((currentValue) => currentValue - value);
  const reset = () => setCount(initialValue || 0);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export { useCounter };
