"use client";

// @fonts and styles
import { fontVariables } from "@/app/fonts";
import "./globals.css";

// @components
import Header from "@/app/_lib/components/features/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables}`}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
