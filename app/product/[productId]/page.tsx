import React from "react";

const page = ({ params }: { params: { productId: String } }) => {
  return <h1>product -{params.productId}</h1>;
};

export default page;
