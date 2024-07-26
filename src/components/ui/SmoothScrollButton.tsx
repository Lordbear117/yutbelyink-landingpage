"use client";

import Link from "next/link";
import React from "react";

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const SmoothScrollButton: React.FC<SmoothScrollLinkProps> = ({
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
      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      prefetch={false}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollButton;
