import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const jakarta = Plus_Jakarta_Sans({
//   variable: "--font-jakarta",
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "undevlpdstudio | Design, Develop & Grow",
  description:
    "Born as an in-house digital team, undevlpdstudio helps businesses transform ideas into impactful digital products through design, development, and marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
