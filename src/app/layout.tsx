import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ordinateur | Hansraj College",
  description: "The Computer Science Society of Hansraj College. Exploring the Void & The Event Horizon of Technology.",
};

import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} font-sans antialiased bg-void text-starlight selection:bg-accretion selection:text-void-dark`}
      >
        <SmoothScroll>
            <CustomCursor />
            {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
