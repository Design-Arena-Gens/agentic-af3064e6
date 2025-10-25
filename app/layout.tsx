import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Bike Cleaning",
  description: "Dragon Ball Z inspired anime character cleaning his Honda 350cc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
