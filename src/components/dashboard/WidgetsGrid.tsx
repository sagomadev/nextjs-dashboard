"use client";

import { IoCarOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={`${isCart}`}
        subtitle="Productos agragados"
        label="Contador"
        icon={<IoCarOutline size={70} className="text-blue-600" />}
      />
    </div>
  );
};
