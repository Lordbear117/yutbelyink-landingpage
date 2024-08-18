import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YutbelyInk - Artista de Tatuajes en Culiacán, Sinaloa",
  description:
    "Descubre a Yutbely, una artista de tatuajes en Culiacán con diseños únicos y personalizados. Agenda tu cita y lleva tu arte en la piel.",
  openGraph: {
    url: "https://www.yutbelyink.me/",
    title: "YutbelyInk - Artista de Tatuajes en Culiacán, Sinaloa",
    description:
      "Descubre a Yutbely, una artista de tatuajes en Culiacán con diseños únicos y personalizados.",
    images: [
      {
        url: "https://www.yutbelyink.me/header-picture.png",
        alt: "Ejemplo de tatuaje de Yutbely",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YutbelyInk - Artista de Tatuajes en Culiacán",
    description:
      "Artista de tatuajes en Culiacán, Sinaloa con diseños únicos y personalizados.",
    images: ["https://www.yutbelyink.me/header-picture.png"],
  },
  alternates: {
    canonical: "https://www.yutbelyink.me/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

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
