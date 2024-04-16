import type { Metadata } from "next";
import { Inter, Nunito, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import RecoilRootWrapper from "@/lib/RecoilRootWrapper";

const font = Outfit({ subsets: ["latin"] });

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
      <body className={font.className}>
        <RecoilRootWrapper>
        <Header />
        {children}
        </RecoilRootWrapper>
       
      </body>
    </html>
  );
}
