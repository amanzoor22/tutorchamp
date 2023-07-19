import React from "react";
import Navbar from "../globals/Navbar";
import Footer from "../globals/Footer";


const LayoutOutSide = ({ children, title }) => {
  return (
    <main className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <div className={`flex-1 bg-gray-50`}>
        {title}
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default LayoutOutSide;
