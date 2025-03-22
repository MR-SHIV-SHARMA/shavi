import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";

export const metadata = {
  title: "AI Background Remover | Instant Transparent Backgrounds - Shavi",
  description:
    "Effortlessly remove image backgrounds with AI precision. Free online tool with instant downloads. Supports PNG, JPG, WEBP.",
  keywords:
    "remove background, transparent background, AI photo editing, free background remover, online background remover, image background eraser, background transparency tool",
};

export default function RootLayout({ children }) {
  return (
    <div className="bg-gray-100 text-gray-900">
      <CustomNavbar basePath="/projects/video-to-audio" />
      <main className="container mx-auto min-h-screen p-6">{children}</main>
      <CustomFooter />
    </div>
  );
}
