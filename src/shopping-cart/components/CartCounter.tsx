"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";
import { useState } from "react";

interface CartCounterProps {
  initValue?: number;
}

export const CartCounter = ({ initValue = 0 }: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  // const [count, setCount] = useState(initValue);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button className="boton-generico" onClick={() => dispatch(addOne())}>
          +1
        </button>
        <button
          className="boton-generico"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
