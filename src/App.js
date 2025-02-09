import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ProjectDetails from "./components/ProjectDetails";
import ChatBox from "./components/ChatBox"; // Import ChatBox component

// Import the Loader component
import Loader from "./components/Loader"; // Make sure this points to the correct file path

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to stop loading after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />  
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/project/:title" element={<ProjectDetails />} />
          </Routes>
          <ChatBox /> {/* Add ChatBox component to App */}
        </>
      )}
    </div>
  );
}

export default App;
