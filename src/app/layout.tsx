import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import the Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Fibly",
    default: "Fibly",
  },
  description: "A project by Aaron Nolan",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
