import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/asset";
import { api } from "../../services/api";
import axios from "axios";
import toast from "react-hot-toast";


type LoginFormData = {
  email: string;
  password: string;
};

interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: "dealer" | "admin" | "customer";
    isApproved: boolean;
  };
  token: string;
};



const LoginForm = () => {


  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = async (formData: LoginFormData) => {
    try {

      const res = await api.post<LoginResponse>("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { user, token } = res.data;

      // SAVE TOKEN
      localStorage.setItem("token", token);

      // SAVE USER
      localStorage.setItem("user", JSON.stringify(user));

      // ROLE REDIRECT
      if (user.role === "dealer") {
        navigate("/dealer/dashboard");
      } else if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/customer/dashboard");
      }
      toast.success("Login successful");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        toast.error(error.response?.data?.message || "Login failed");
      } else if (error instanceof Error) {
        toast.error("Something Went Wrong")
        console.log(error.message);
      } else {
        console.log("Unknown error occurred");
      }
    }


  };


  return (
    <div className="w-full max-w-sm mx-auto px-4 sm:px-0">
      {/* Header */}
      <div className="md:hidden flex items-center justify-start mb-4">
        <Link to="/">
          <img
            className="w-40 z-10"
            src={assets.logo}
            alt="Drive Hub Logo"
          />
        </Link>

      </div>
      <h1 className="text-3xl font-semibold">Welcome Back</h1>
      <p className="text-gray-600 text-sm mt-1">
        Sign in to your DriveHub account
      </p>

      {/* Form */}
      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();

          handleLogin({
            email,
            password,
          });
        }}
      >
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>

          <div className="relative mt-1">
            <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>

          <div className="relative mt-1">
            <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {passwordVisible ? (
                <EyeIcon size={18} />
              ) : (
                <EyeOffIcon size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" id="remember" />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-amber-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md font-medium transition cursor-pointer"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-200" />
          or continue with
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full border border-gray-200 py-2 rounded-md hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-sm text-center mt-2">
          Don&apos;t have an account?{" "}
          <Link to="/sign-up" className="text-amber-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="text-gray-600 text-center text-xs">
          &copy; 2026 DriveHub. All rights reserved.
        </p>
      </form>
    </div>
  );
};

export default LoginForm;