"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // 🛑 ImageBackgroundRemover के अंदर हो तो Navbar/Footer hide करें
  const isCustomLayout = pathname.startsWith("/projects/");

  return (
    <>
      {!isCustomLayout && <Navbar />}
      <main>{children}</main>
      {!isCustomLayout && <Footer />}
    </>
  );
}
