import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p> heading specific to grouped pages</p>
      {children}
    </div>
  );
};

export default layout;
