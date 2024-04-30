import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className=" text-8xl">home page</h1>
      <Link href="/product">products</Link> <br />
      <Link href="/block">block</Link>
    </div>
  );
};

export default page;
