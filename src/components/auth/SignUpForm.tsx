import { Link, useNavigate } from "react-router-dom"
import RoleSelect from "../RoleSelect"
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon, User } from "lucide-react"
import { useState } from "react";
import { assets } from "../../assets/asset";
import axios from "axios";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export interface RegisterResponse {
  success: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    role: "customer" | "admin" | "dealer";
    isApproved: boolean;
  };
  token: string;
}

type RegisterFormData = {
  name: string,
  email: string,
  password: string
  role: string
}


const SignUpForm = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"customer" | "dealer" | "">("");

  const navigate = useNavigate()


  const handleRegister = async (formData: RegisterFormData) => {
    try {


      if (!role) {
        toast.error("Please select an account type");
        return;
      }

      const res = await api.post<RegisterResponse>('/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      })

      const { user, token } = res.data


      if (!user.isApproved) {
        navigate("/pending-approval");
        return;
      }

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      // SET GLOBAL AXIOS HEADER
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      //ROLE ROUTING

      const routes: Record<string, string> = {
        dealer: "/dealer/dashboard",
        admin: "/admin/dashboard",
        customer: "/customer/dashboard",
      }

      toast.success("Registration successful");

      navigate(routes[user.role] || "/");

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data)
        toast.error(error.response?.data.message || 'Registration Failed')
      }
      else {
        console.log(error);
        toast.error("Something went wrong");
      }
    }

  }




  return (
    <div className="w-full max-w-sm mx-auto px-4 sm:px-0">
      {/* Header */}
      <div className="md:hidden flex items-center justify-center mb-4">
        <Link to="/">
          <img
            className="w-40 z-10"
            src={assets.logo}
            alt="Drive Hub Logo"
          />
        </Link>

      </div>
      <h1 className="text-3xl font-semibold">Create Your Account</h1>
      <p className="text-gray-600 text-sm mt-1">
        Join DriveHub in a few easy steps
      </p>
      <RoleSelect role={role} setRole={setRole} />

      {/* Form */}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister({
          name,
          email,
          password,
          role
        })
      }}

        className="mt-4 space-y-2">
        {/* Full Name */}
        <div className="flex flex-col mt-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            FullName
          </label>

          <div className="relative mt-1">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md font-medium transition"
        >
          Sign Up
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