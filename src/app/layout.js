import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header/Header';
const inter = Inter({ subsets: ["latin"] });
import Footer from '../components/Footer/Footer';
import HeaderBanner from '../components/HeaderBanner/HeaderBanner';
import Loader from "@/components/Loader/Loader";



export const metadata = {
  title: "Machador",
  description: "AI Onboarding Idea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
