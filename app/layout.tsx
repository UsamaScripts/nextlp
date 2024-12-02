import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const work = localFont({
  src: "./fonts/WorkSans.ttf",
  variable: "--font-work",
  weight: "100 200 300 400 500 600 700 800 900",
});
const open = localFont({
  src: "./fonts/open.ttf",
  variable: "--font-open",
  weight: "100 200 300 400 500 600 700 800 900",
});
const DMsans = localFont({
  src: "./fonts/DMsans.ttf",
  variable: "--font-DMsans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work.variable} ${open.variable} ${DMsans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
