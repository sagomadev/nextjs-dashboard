import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart Page",
  description: "Counter page",
  keywords: "counter, page, nextjs",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CartCounter />
    </div>
  );
}
