import { Link } from "react-router-dom"
import RoleSelect from "../RoleSelect"
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon, User } from "lucide-react"
import { useState } from "react";

const SignUpForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto px-4 sm:px-0">
      {/* Header */}
      <h1 className="text-3xl font-semibold">Create Your Account</h1>
      <p className="text-gray-600 text-sm mt-1">
        Join DriveHub in a few easy steps
      </p>
      <RoleSelect />
      {/* Form */}
      <form className="mt-4 space-y-2">
        {/* Full Name */}
         <div className="flex flex-col mt-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            FullName
          </label>

          <div className="relative mt-1">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="email"
              type="email"
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>
        <div className="flex flex-col mt-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>

          <div className="relative mt-1">
            <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md font-medium transition"
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
          <Link to="/login" className="text-amber-600 hover:underline">
            Sign In
          </Link>
        </p>
        <p className="text-gray-600 text-center text-xs">
          &copy; 2026 DriveHub. All rights reserved.
        </p>
      </form>
    </div>
  )
}

export default SignUpForm