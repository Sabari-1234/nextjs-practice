"use client";
import { notFound } from "next/navigation";
import React from "react";
const randomaNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};
const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const num = randomaNumber(2);
  if (num == 1) {
    throw new Error("product id is not in use ");
  }
  return (
    <>
      {parseInt(params.reviewId) > 1000 ? (
        notFound()
      ) : (
        <h1>
          product-{params.productId} , review -{params.reviewId}
        </h1>
      )}
    </>
  );
};

export default page;
