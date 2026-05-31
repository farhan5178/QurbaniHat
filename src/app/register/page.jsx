"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
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
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
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
