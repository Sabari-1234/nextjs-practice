import { Metadata } from "next";
import React from "react";

type props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `product-${params.productId}`,
  };
};

const page = ({ params }: props) => {
  return <h1>product -{params.productId}</h1>;
};

export default page;
