import React from "react";
import { Award, Shield, Users, Heart, Target, CheckCircle } from "lucide-react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center pt-10 pb-8 border-t border-slate-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>

        {/* Main Content Section */}
        <div className="py-16 flex flex-col md:flex-row gap-16 items-start">
          {/* Image */}
          <div className="w-full md:max-w-[450px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                className="w-full h-[400px] object-cover"
                src="/placeholder.svg?height=400&width=450"
                alt="About Kickzy - Premium footwear craftsmanship"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-slate-900">
                  Est. 2025
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-8 md:w-2/4">
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
                At Kickzy, we believe that exceptional footwear is more than
                just fashion—it's a statement of quality, comfort, and personal
                style. Founded with a passion for craftsmanship, we've dedicated
                ourselves to creating shoes that elevate every step of your
                journey.
              </p>
              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed">
                Our commitment to excellence drives us to source the finest
                materials and work with skilled artisans who share our vision.
                Every pair of shoes tells a story of dedication, innovation, and
                the pursuit of perfection.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  50K+
                </div>
                <div className="text-sm text-slate-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  100+
                </div>
                <div className="text-sm text-slate-600">Shoe Styles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16">
          <div className="text-center mb-16 text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
            <Title text1={"WHY"} text2={"CHOOSE US"} />
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              We're committed to delivering exceptional value through quality,
              service, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Assurance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed mb-6">
                Every pair undergoes rigorous quality testing to ensure
                durability, comfort, and style. We use only premium materials
                sourced from trusted suppliers worldwide.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Quality guarantee</span>
                </div>
              </div>
            </div>

            {/* Convenience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-4">
                Convenience
              </h3>
              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed mb-6">
                Shop from the comfort of your home with our seamless online
                experience. Fast shipping, easy returns, and flexible payment
                options make shopping effortless.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Secure payment options</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-4">
                Exceptional Customer Service
              </h3>
              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed mb-6">
                Our dedicated support team is here to help you every step of the
                way. From sizing advice to after-sales support, we're committed
                to your satisfaction.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="py-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of satisfied customers who've discovered the
                perfect blend of style, comfort, and quality.
              </p>
              <button
                onClick={() => navigate("/collection")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg"
              >
                <span>Explore Our Collection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
