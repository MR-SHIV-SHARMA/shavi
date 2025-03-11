import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Shavi Logo */}
        <Image
          className="dark:invert"
          src="/shavi-logo.jpg" // सुनिश्चित करें कि आपके public फोल्डर में shavi-logo.svg मौजूद है
          alt="Shavi logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold">Welcome to Shavi</h1>
        <p className="text-base text-gray-600">
          Your one-stop platform for digital transformations.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/projects"
          >
            Explore Tools
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-100 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/docs"
          >
            Documentation
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Shavi. All rights reserved.</p>
      </footer>
    </div>
  );
}
