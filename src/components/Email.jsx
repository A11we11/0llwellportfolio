import { useState } from "react";

function Email() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-gray-400 text-lg md:text-xl mb-2 tracking-wide">
            Ready to collaborate?
          </p>
          <h2 className="text-2xl md:text-4xl font-light text-gray-300   ">
            Let's create something amazing
          </h2>
        </div>

        {/* Main email link */}
        <div className="relative">
          <a
            href="mailto:ogbonnaallwell1999@gmail.com?subject=Let's work together&body=Hi John,%0D%0A%0D%0AI'd love to discuss a project with you.%0D%0A%0D%0ABest regards"
            className="group inline-block relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Email text */}
            <span
              className={`
              block text-2xl text-center  sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
              font-bold leading-tight tracking-tight
              transition-all duration-500 ease-out font-oswald 
              ${
                isHovered
                  ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text transform -translate-y-2"
                  : "text-white hover:text-blue-400"
              }
            `}
            >
              ogbonnaallwell1999@gmail.com
            </span>

            {/* Hover underline effect */}
            <div
              className={`
              absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 
              transition-all duration-500 ease-out
              ${isHovered ? "w-full" : "w-0"}
            `}
            ></div>

            {/* Glow effect */}
            <div
              className={`
              absolute inset-0 blur-2xl opacity-0 transition-opacity duration-500
              bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20
              ${isHovered ? "opacity-100" : "opacity-0"}
            `}
            ></div>
          </a>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Click to send me an email or just say hello
        </p>

        {/* Alternative contact methods */}
        <div className="mt-16 flex justify-center space-x-8  font-oswald md:text-2xl ">
          <a
            href="https://www.linkedin.com/in/allwell-ogbonna-3945b7239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/0llwell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="https://github.com/A11we11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Copy email button */}
        <button
          onClick={() => {
            navigator.clipboard.writeText("ogbonnaallwell1999@gmail.com");
            // You could add a toast notification here
          }}
          className="mt-8 px-6 py-3 border text-sm md:text-2xl border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 rounded-full  tracking-wide"
        >
          Copy Email
        </button>
      </div>
    </section>
  );
}
export default Email;
