import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>home page</h1>
      <Link href="/product">products</Link>
    </div>
  );
};

export default page;
