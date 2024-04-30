import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>f1 level</h1>
      <Link href={"/f1/f2"}> f2 click</Link>
    </>
  );
};

export default page;
