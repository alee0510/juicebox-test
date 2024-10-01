import type { Metadata } from "next";
import { fontVariables } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juicebox",
  description: "demo test for juicebox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(fontVariables);
  return (
    <html lang="en">
      <body className={`${fontVariables}`}>{children}</body>
    </html>
  );
}
