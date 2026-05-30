import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intercambio Cristao EUA | Jovens cristaos nos Estados Unidos",
  description:
    "Landing page para intercambio de jovens cristaos nos Estados Unidos, com estudo, ingles, vida no campus e comunidade de fe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-white font-sans text-navy-950">{children}</body>
    </html>
  );
}
