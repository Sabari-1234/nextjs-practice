"use client";
import { throws } from "assert";
import { Metadata } from "next";
import Link from "next/link";

import React from "react";

type props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: props): Metadata => {
//   return {
//     title: `product-${params.productId}`,
//   };
// };

const randomaNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};
const page = ({ params }: props) => {
  const num = randomaNumber(2);
  if (num == 1) {
    throw new Error("product id is not in use ");
  }
  return (
    <div>
      <h1>product -{params.productId}</h1>
    </div>
  );
};

export default page;
