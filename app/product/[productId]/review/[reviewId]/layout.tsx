"use client";
import React from "react";
const randomaNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};
const layout = ({ children }: { children: React.ReactNode }) => {
  const num = randomaNumber(2);
  if (num == 1) {
    throw new Error("product id is not in use ");
  }
  return (
    <>
      <h1>inner head</h1>
      {children}
      <h1>inner foot</h1>
    </>
  );
};

export default layout;
