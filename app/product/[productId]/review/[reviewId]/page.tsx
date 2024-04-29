import { notFound } from "next/navigation";
import React from "react";

const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
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
