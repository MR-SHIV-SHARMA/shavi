"use client";
import { ReactCompareSlider } from "react-compare-slider";
import Image from "next/image";

export function CompareSlider({ original, processed, className }) {
  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      <ReactCompareSlider
        itemOne={
          <div className="relative w-full h-full">
            <Image
              src={original}
              alt="Original Image"
              fill
              className="object-contain rounded-lg"
            />
            <span className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm text-white">
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
            <span className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-sm text-white">
              Processed
            </span>
          </div>
        }
        className="rounded-lg shadow-md"
      />
    </div>
  );
}
