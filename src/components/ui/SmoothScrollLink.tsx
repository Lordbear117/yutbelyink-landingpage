"use client";

import Link from "next/link";
import React from "react";

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={`#${to}`}
      onClick={handleClick}
      className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
      prefetch={false}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
