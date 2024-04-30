"use client";

const ProductError = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h1>{error.message} error</h1>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ProductError;
