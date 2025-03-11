// src/app/projects/imageBackgroundRemover/layout.js
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";

export const metadata = {
  title: "Image Background Remover - Shavi",
  description:
    "Effortlessly remove image backgrounds with our AI-powered tool from Shavi.",
};

export default function RootLayout({ children }) {
  return (
    <div className="bg-gray-100 text-gray-900">
      <CustomNavbar basePath="/projects/pdfConverter" />
      <main className="container mx-auto min-h-screen p-6">{children}</main>
      <CustomFooter />
    </div>
  );
}
