import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portfólio - Victor Almeida",
  description: "Confira o meu portfólio de desenvolvedor web front end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="./victor's-favicon.png" />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
