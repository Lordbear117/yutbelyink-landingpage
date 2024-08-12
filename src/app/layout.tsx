import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YutbelyInk",
  description:
    "Descubre el arte del tatuaje con Yutbely en yutbelyink.me. Diseño personalizado, técnica impecable y una experiencia única en cada trazo. Agenda tu sesión hoy y lleva tu piel al siguiente nivel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
