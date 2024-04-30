"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderPage = () => {
  const router = useRouter();

  const handleOrder = () => {
    router.push("/");
    //router.back();
    //router.replace("/");
    //router.forward();
  };
  return (
    <div>
      <h1>product</h1>
      <button onClick={handleOrder}>order</button>
    </div>
  );
};

export default OrderPage;
