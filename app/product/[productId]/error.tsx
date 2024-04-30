"use client";

const ProductError = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1>{error.message} error</h1>
    </div>
  );
};

export default ProductError;
