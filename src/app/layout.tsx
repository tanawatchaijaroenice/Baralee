import type { Metadata } from "next";
import { Afacad, Afacad_Flux } from "next/font/google";
import "./globals.css"; 

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const afacadFlux = Afacad_Flux({
  variable: "--font-afacad-flux",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Baralee",
  description: "Baralee Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} ${afacadFlux.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
