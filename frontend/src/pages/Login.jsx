import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  ArrowRight,
  Shield,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Account created successfully!");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Welcome back!");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-slate-900">
              {currentState}
            </h1>
            <div className="w-8 h-0.5 bg-gradient-to-r from-slate-600 to-slate-400 rounded-full"></div>
          </div>
          <p className="text-slate-600">
            {currentState === "Login"
              ? "Welcome back! Please sign in to your account."
              : "Create your account to get started with premium footwear."}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            {/* Name Field - Only for Sign Up */}
            {currentState === "Sign Up" && (
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder-slate-500 text-xs md:text-sm"
                    placeholder="Enter your full name"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder-slate-500 text-xs md:text-sm"
                  placeholder="Enter your email address"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-xl focus:border-slate-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder-slate-500 text-xs md:text-sm"
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Form Footer */}
            <div className="flex justify-between items-center text-sm">
              <button
                type="button"
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
                disabled={isLoading}
              >
                Forgot your password?
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentState(
                    currentState === "Login" ? "Sign Up" : "Login",
                  )
                }
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
                disabled={isLoading}
              >
                {currentState === "Login" ? "Create account" : "Login here"}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold py-4 px-8 rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>
                    {currentState === "Login"
                      ? "Signing In..."
                      : "Creating Account..."}
                  </span>
                </>
              ) : (
                <>
                  <span>
                    {currentState === "Login" ? "Sign In" : "Create Account"}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">
            By {currentState === "Login" ? "signing in" : "creating an account"}
            , you agree to our{" "}
            <a
              href="#"
              className="text-slate-700 hover:text-slate-900 underline transition-colors duration-200"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-slate-700 hover:text-slate-900 underline transition-colors duration-200"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
