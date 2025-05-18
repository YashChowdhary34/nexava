import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ClerkProviders from "./ClerkProviders";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Nexava",
  description: "Webinar Platform with AI Sales Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.className} antialiased`}>
        <ClerkProviders>{children}</ClerkProviders>
      </body>
    </html>
  );
}
