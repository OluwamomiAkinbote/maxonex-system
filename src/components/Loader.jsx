import React from "react";
import { ScaleLoader } from "react-spinners"; // Import the spinner

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <ScaleLoader color="#9333EA" size={40} /> {/* Customize the size and color */}
  </div>
);

export default Loader;
