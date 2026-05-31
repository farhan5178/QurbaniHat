"use client";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MyProfile() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center min-h-screen bg-base-200/50 p-4 animate__animated animate__fadeIn">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-base-200">
          <div className="card-body p-8 flex flex-col items-center text-center">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-300"></div>
              
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative z-10 bg-base-200 text-neutral flex items-center justify-center text-4xl font-bold">
                  {user?.photoUrl || user?.image ? (
                    <img src={user?.photoUrl || user?.image} alt={user?.name || "User"} />
                  ) : (
                    <span>{user?.name?.charAt(0).toUpperCase() || "U"}</span>
                  )}
                </div>
              </div>

            </div>
            
            <h1 className="text-2xl font-bold text-base-content mb-2 font-inter tracking-tight">
              {user?.name || "Loading..."}
            </h1>
            <p className="text-base-content/60 mb-8 font-medium">
              {user?.email || ""}
            </p>
            
            <button
              className="btn btn-primary w-full font-semibold rounded-xl text-white shadow-lg shadow-primary/30"
              onClick={() => router.push("/my-profile/update")}
            >
              Update Information
            </button>
          </div>
        </div>
      </motion.div>
    </div>
    </ProtectedRoute>
  );
}
