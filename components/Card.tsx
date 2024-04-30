import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border bg-zinc-600 shadow-xl h-96 w-96">{children}</div>
  );
};

export default Card;
