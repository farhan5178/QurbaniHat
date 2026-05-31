"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, googleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(name, email, photoUrl, password);
      toast.success("Registered successfully! Please log in.");
      // On successful registration, navigate to login
      router.push("/login");
    } catch (err) {
      toast.error(err.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      router.push("/");
    } catch (err) {
      toast.error(err.message || "Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 px-4 py-12">
      <div className="max-w-lg w-full p-8 rounded-3xl bg-base-100 shadow-2xl border border-base-300/50 backdrop-blur-sm relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 -ml-8 -mt-8 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-8 -mb-8 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-2 tracking-tight">
              Create Account
            </h1>
            <p className="text-base-content/60 font-medium">Join us to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-200" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-200" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input 
                type="url" 
                placeholder="https://example.com/photo.jpg" 
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-200" 
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-200" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-secondary w-full rounded-xl text-lg font-bold shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-200 mt-2 ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="divider my-6 text-sm text-base-content/50 font-medium">OR</div>

          <button 
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full rounded-xl flex items-center justify-center gap-3 hover:bg-base-200 hover:text-base-content hover:border-base-300 transition-all duration-200"
          >
            <FcGoogle className="text-2xl" />
            <span className="font-semibold">Continue with Google</span>
          </button>

          <div className="mt-8 text-center text-sm font-medium">
            <span className="text-base-content/70">Already have an account? </span>
            <Link href="/login" className="text-secondary hover:text-secondary-focus hover:underline transition-all">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
