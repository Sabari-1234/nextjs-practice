import React from "react";

const page = ({
  params,
}: {
  params: { productId: String; reviewId: String };
}) => {
  return (
    <h1>
      product-{params.productId} , review -{params.reviewId}
    </h1>
  );
};

export default page;
