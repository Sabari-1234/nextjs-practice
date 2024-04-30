import Link from "next/link";
import React from "react";

const page = () => {
  const productId = 100;
  return (
    <div>
      <h1>products</h1>
      <Link href={"/"}>home</Link>
      <br />
      <Link href={"/product/1"}>product 1</Link>
      <br />
      <Link href={"/product/2"}>product 2</Link>
      <br />
      <Link href={"/product/3"} replace>
        product 3
      </Link>
      <br />
      <Link href={`/product/${productId}`}>product {productId}</Link>
    </div>
  );
};

export default page;
