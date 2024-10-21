import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center md:flex-col relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="container mx-auto text-center flex flex-col items-center justify-center relative z-10">
        <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-8 md:text-6xl text-green-800">
            Discover Sustainable Travel
          </h1>
          <p className="text-xl mb-2 md:text-2xl text-green-800">
            Explore the world while minimizing your environmental impact
          </p>
          <a
            href="#impact-calculator"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 inline-block md:mt-8"
          >
            Start Your Eco-Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
