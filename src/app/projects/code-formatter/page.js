// src/app/projects/imageBackgroundRemover/page.js
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center text-center py-20">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Remove Backgrounds Instantly!
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-6">
                Shavi's AI-powered background remover helps you remove backgrounds from images with a single click.
            </p>
            <Image
                src="/bg-removal-example.png"
                alt="Background Removal Example"
                width={500}
                height={300}
                className="rounded shadow-md"
            />
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                Upload an Image
            </button>
        </div>
    );
}
