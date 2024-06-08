import { Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cinzel = Cinzel({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Paddy E-Commerce ",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
