import { useState } from "react";
import { Mail, CheckCircle, Gift } from "lucide-react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-slate-50 to-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg relative overflow-hidden">
      <div className="text-center relative">
        {/* Header Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 py-2 mb-4">
            <Gift className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
              Exclusive Offer
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Subscribe now & Get{" "}
            <span className="text-emerald-600">20% off</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-base leading-relaxed max-w-2xl mx-auto">
            Join our exclusive community and be the first to discover new
            arrivals, special offers, and style tips from our experts. Plus,
            enjoy an instant 20% discount on your first purchase.
          </p>
        </div>

        {/* Success State */}
        {isSubmitted && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex items-center justify-center gap-2 text-emerald-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">
                Successfully subscribed! Check your email for your discount
                code.
              </span>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-lg border border-slate-200">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                className="w-full pl-12 pr-4 py-4 bg-transparent outline-none text-slate-900 placeholder-slate-500 font-medium"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading || isSubmitted}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || isSubmitted || !email}
              className="bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold px-8 py-4 rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 min-w-[140px]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>SUBSCRIBE</span>
                  <Mail className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Privacy Notice */}
        <p className="text-xs text-slate-500 mt-6 max-w-lg mx-auto">
          By subscribing, you agree to our{" "}
          <a
            href="#"
            className="text-slate-700 hover:text-slate-900 underline transition-colors duration-200"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-slate-700 hover:text-slate-900 underline transition-colors duration-200"
          >
            Terms of Service
          </a>
          . You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterBox;
