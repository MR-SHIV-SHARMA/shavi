"use client";

import { useCallback, useState } from "react";
import Head from "next/head";
import { Document, Page, pdfjs } from "react-pdf";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [imageUrlArray, setImageUrlArray] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [selectedPDFFile, setSelectedPDFFile] = useState();

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/5.0.375/pdf.worker.min.js`;
  
  const handleImage = useCallback((event) => {
    setImageUrlArray([]);
    const file = event.target.files[0];

    if (!!file?.type?.length && file.type === "application/pdf") {
      setIsLoading(true);
      setSelectedPDFFile(file);
    } else if (!!file?.type?.length) {
      setFileType("image");
      setImageUrlArray([URL.createObjectURL(file).toString()]);
    }
  }, []);

  const onLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const onRenderSuccess = useCallback(
    (pageIndex) => {
      Array.from(new Array(numPages), (el, index) => {
        const importPDFCanvas = document.querySelector(
          `.import-pdf-page-${index + 1} canvas`
        );
        if (pageIndex === index) {
          importPDFCanvas.toBlob((blob) => {
            setImageUrlArray((prev) => [...prev, URL.createObjectURL(blob)]);
          });
        }
      });
    },
    [numPages]
  );

  return (
    <div className="min-h-screen flex flex-col items-center p-2">
      <Head>
        <title>PDF to PNG</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 py-20">
        <h1 className="text-2xl font-bold">
          PDF to PNG Client-side Conversion
        </h1>
        <label
          htmlFor="upload"
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer mt-4"
        >
          Upload PDF
        </label>
        <input
          className="hidden"
          id="upload"
          type="file"
          onChange={handleImage}
        />

        {isLoading && (
          <div className="w-16 h-16 border-8 border-gray-300 border-t-red-500 rounded-full animate-spin mt-4" />
        )}

        {selectedPDFFile && (
          <div className="mt-6 w-full max-w-xl">
            <Document file={selectedPDFFile} onLoadSuccess={onLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <div key={index} className="text-center">
                  <Page
                    pageNumber={index + 1}
                    className={`import-pdf-page-${index + 1} mx-auto my-4 rounded-xl`}
                    onRenderSuccess={() => onRenderSuccess(index)}
                    width={1024}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                  {imageUrlArray?.[index] && (
                    <a
                      className="block bg-red-500 text-white py-2 rounded text-center mt-2"
                      href={imageUrlArray[index]}
                      download
                    >
                      Download File
                    </a>
                  )}
                </div>
              ))}
            </Document>
          </div>
        )}

        {!!imageUrlArray?.length &&
          fileType === "image" &&
          imageUrlArray.map((image, index) => (
            <div key={index} className="flex flex-col items-center mt-4">
              <img
                className="rounded-xl w-full max-w-lg"
                src={image}
                alt="Converted"
              />
              <a
                className="bg-red-500 text-white py-2 rounded text-center mt-2 w-full max-w-xs"
                href={image}
                download
              >
                Download File
              </a>
            </div>
          ))}
      </main>
    </div>
  );
}
