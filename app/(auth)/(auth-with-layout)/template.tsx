"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const links = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" },
  ];
  const pathname = usePathname();
  const [Input, setInput] = useState("");
  return (
    <div>
      <p>
        template page reload for every route unlike layout file state is also
        not preserved in this
      </p>
      {children}
      <input
        type="text"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default AuthTemplate;
