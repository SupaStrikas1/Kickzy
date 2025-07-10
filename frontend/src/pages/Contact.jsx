import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center pt-10 border-t border-slate-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <Title text1={"CONTACT"} text2={"US"} />
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="py-10 flex flex-col justify-center md:flex-row gap-16 mb-16 items-start">
          {/* Image */}
          <div className="w-full md:max-w-[480px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl transform rotate-2"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                className="w-full h-[400px] object-cover"
                src="/placeholder.svg?height=400&width=480"
                alt="Kickzy Store Location - Premium footwear showroom"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-slate-900">
                  Visit Our Showroom
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center items-start gap-8 md:max-w-lg">
            {/* Store Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Store</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Visit our flagship store to experience our premium collection
                firsthand. Our knowledgeable staff is ready to help you find the
                perfect pair of shoes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="font-medium">
                    123 Fashion Street, Downtown District, NY 10001
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="font-medium hover:text-slate-900 transition-colors duration-200"
                  >
                    Tel: (+1) 555-123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a
                    href="mailto:store@kickzy.com"
                    className="font-medium hover:text-slate-900 transition-colors duration-200"
                  >
                    Email: store@kickzy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Careers at Kickzy
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Join our passionate team and help us revolutionize the footwear
                industry. We're always looking for talented individuals who
                share our commitment to excellence.
              </p>
              <button className="group inline-flex items-center gap-3 border-2 border-slate-900 text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span>Explore Jobs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="py-16 border-y border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Multiple Ways to Reach Us
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the method that works best for you. We're here to help with
              any questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Support */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Phone Support
              </h4>
              <p className="text-slate-600 mb-4">
                Speak directly with our customer service team
              </p>
              <p className="text-sm text-slate-500">
                Available Mon-Fri, 9AM-6PM EST
              </p>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Email Support
              </h4>
              <p className="text-slate-600 mb-4">
                Send us a detailed message anytime
              </p>
              <p className="text-sm text-slate-500">Response within 24 hours</p>
            </div>

            {/* Visit Store */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Visit Our Store
              </h4>
              <p className="text-slate-600 mb-4">
                Experience our products in person
              </p>
              <p className="text-sm text-slate-500">
                Personal styling consultation available
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-16">
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;
