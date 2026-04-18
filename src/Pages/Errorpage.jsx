import React from "react";
import { Link } from "react-router";


const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <div className="text-center max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold mb-4 tracking-widest drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-200 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          
          {/* Go Home */}
          <Link
            to="/"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Go Home
          </Link>

          {/* Books Page */}
          <Link
            to="/books"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            View Books
          </Link>

        </div>

        {/* Illustration */}
        <div className="mt-10">
          <img
            src="https://illustrations.popsy.co/white/crashed-error.svg"
            alt="Error Illustration"
            className="w-64 mx-auto opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Errorpage;