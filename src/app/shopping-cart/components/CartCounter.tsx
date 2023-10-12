"use client";
import { useState } from "react";

interface CartCounterProps {
  initValue?: number;
}

export const CartCounter = ({ initValue = 0 }: CartCounterProps) => {
  const [count, setCount] = useState(initValue);

  const handlerClickButton = (value: number) => {
    if (count + value < 0) return;
    setCount(count + value);
  };
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="boton-generico"
          onClick={() => handlerClickButton(1)}
        >
          +1
        </button>
        <button
          className="boton-generico"
          onClick={() => handlerClickButton(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};
