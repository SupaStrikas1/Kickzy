import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px] py-16 lg:py-24 gap-12 lg:gap-20">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-sm sm:text-base font-medium text-slate-600 uppercase tracking-wider">
                  Bestsellers
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Latest
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                  Arrivals
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Discover our premium collection of handcrafted shoes designed
                for the modern professional. Quality meets style in every step.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm sm:text-base text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Background Gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl transform rotate-3 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl transform -rotate-1 z-0"></div>

              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="../../src/assets/hero_image.jpg"
                  alt="Premium leather shoes collection"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />

                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    New Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
