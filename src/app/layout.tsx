import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "DesignR Digital",
  description: "DesignR Digital - Agence de design et de digitalisation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
