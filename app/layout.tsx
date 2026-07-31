import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jerwin | Portfolio",
  description:
    "Personal portfolio website showcasing my skills, projects, and experience.",
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