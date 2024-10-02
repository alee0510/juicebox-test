"use client";

// @fonts and styles
import { fontVariables } from "@/app/fonts";
import "./globals.css";

// @components
import Header from "@/app/_lib/components/features/header";
import LottieAnimation from "@/app/_lib/components/features/lottie";

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
          <LottieAnimation />
          {children}
        </main>
      </body>
    </html>
  );
}
