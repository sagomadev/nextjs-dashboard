"use client";
import { useState } from "react";

export const CartCounter = () => {
  const [count, setCount] = useState(0);

  const handlerClickButton = (value: number) => {
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
