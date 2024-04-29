import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>heading of product</h1>
      {children}
      <h1>footer of product</h1>
    </>
  );
};

export default layout;
