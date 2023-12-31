import "./globals.css";
import { Montserrat, McLaren } from "next/font/google";

const mclaren = McLaren({
  subsets: ["latin"],
  variable: "--font-McLaren",
  weight: "400",
});

const montserrat = Montserrat({
  display: "swap",
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mclaren.variable} ${montserrat.variable}`}>
      <body className=" bg-[#eee] px-0 py-4 font-montserrat">{children}</body>
    </html>
  );
}
