import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Card>
      <h1>Archived notification page</h1>
      <Link href={"/dashboard-parrallel-route"}>default</Link>
    </Card>
  );
};

export default page;
