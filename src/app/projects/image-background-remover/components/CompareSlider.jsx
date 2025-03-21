// components/CompareSlider.jsx
"use client";
import { CompareSlider as ReactCompareSlider } from "react-compare-slider";
import Image from "next/image";

export function CompareSlider({ original, processed, className }) {
  return (
    <ReactCompareSlider
      itemOne={
        <div className="relative w-full h-full">
          <Image
            src={original}
            alt="Original Image"
            fill
            className="object-contain rounded-lg"
          />
          <span className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm">
            Original
          </span>
        </div>
      }
      itemTwo={
        <div className="relative w-full h-full">
          <Image
            src={processed}
            alt="Processed Image"
            fill
            className="object-contain rounded-lg"
          />
          <span className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-sm">
            Processed
          </span>
        </div>
      }
      className={className}
      handle={
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-blue-500 shadow-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
      }
    />
  );
}
