"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" },
  ];
  const pathname = usePathname();

  return (
    <div>
      <p> heading specific to grouped pages</p>
      {children}

      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "text-blue-800" : "text-red-600"}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default layout;
