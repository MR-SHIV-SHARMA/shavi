// src/app/projects/imageBackgroundRemover/components/CustomFooter.js
const CustomFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shavi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default CustomFooter;
