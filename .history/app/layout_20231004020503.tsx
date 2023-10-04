import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTN Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen md:px-20 lg:px-40 2xl:px-60 pb-20 bg-[linear-gradient(90deg,_#47CACC-2.06%,_#A5CAD2_100%)]">
        {children}
      </body>
    </html>
  );
}
