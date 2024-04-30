import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>content of f4</h1>
      <Link href={"/f1/f3"}>f3 click</Link>
      <Link href={"/about"}>about</Link>
      {/* not works currently */}
      <Link href={"/f1"}>f1 click</Link>
    </div>
  );
};

export default page;
