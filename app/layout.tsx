import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zinc",
  description: "zinc is a element",
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html className={inter.className}>
      <body>{props.children}</body>
    </html>
  );
};


export default RootLayout;
