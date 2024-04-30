import { throws } from "assert";
import { Metadata } from "next";
import Link from "next/link";

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
  return (
    <div>
      <h1>product -{params.productId}</h1>
    </div>
  );
};

export default page;
