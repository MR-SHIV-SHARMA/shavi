import { useState } from "react";

export default function VideoToAudio() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [conversionComplete, setConversionComplete] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
      setError("");
      setConversionComplete(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please select a video file to convert.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/convert", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        const originalName = file.name.split(".").slice(0, -1).join(".");
        a.href = url;
        a.download = `${originalName}.mp3`;
        document.body.appendChild(a);
        a.click();
        a.remove();

        setConversionComplete(true);
      } else {
        const errorMessage = await response.text();
        setError(`Conversion failed: ${errorMessage}`);
      }
    } catch (error) {
      setError("An error occurred while converting the file.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    setFile(null);
    setFileURL("");
    setError("");
    setConversionComplete(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Video to Audio Converter
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {!conversionComplete && (
            <>
              <div className="w-full mb-4">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="w-full border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-400"
                />
              </div>
              {fileURL && (
                <div className="mb-4">
                  <video
                    src={fileURL}
                    controls
                    className="w-full border rounded-lg shadow"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg text-white ${
                  loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                } transition duration-200`}
                disabled={loading}
              >
                {loading ? "Converting..." : "Convert"}
              </button>
            </>
          )}
          {conversionComplete && (
            <button
              type="button"
              className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-200"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
