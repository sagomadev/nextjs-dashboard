"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  substractOne,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface CartCounterProps {
  initValue?: number;
}
interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const CartCounter = ({ initValue = 0 }: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);

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
