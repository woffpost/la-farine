import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Farine — Artisan Bakery",
  description: "Demo landing page — La Farine — Artisan Bakery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
