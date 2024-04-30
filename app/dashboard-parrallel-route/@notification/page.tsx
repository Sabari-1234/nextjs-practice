import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Card>
      <h1>notification page</h1>
      <Link href={"/dashboard-parrallel-route/archived"}>archive</Link>
    </Card>
  );
};

export default page;
