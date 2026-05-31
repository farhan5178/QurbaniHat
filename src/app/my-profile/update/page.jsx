"use client";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Link from "next/link";

export default function UpdateProfile() {
  const { user, updateUser } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      Promise.resolve().then(() => {
        setName(user.name || "");
        setImage(user.photoUrl || user.image || "");
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      await updateUser({ name, image });
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-center items-start w-full mt-10 pb-12 animate__animated animate__fadeIn">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg"
      >
        <div className="card bg-base-100 shadow-sm border border-base-200 w-full">
          <div className="card-body p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-base-content mb-2">
                Update Profile
              </h1>
              <p className="text-base-content/70">
                Keep your information up to date
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input 
                  required 
                  type="text" 
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full focus:input-primary"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Profile Image URL</span>
                </label>
                <input 
                  type="text" 
                  placeholder="https://example.com/image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="input input-bordered w-full focus:input-primary"
                />
              </div>
              
              <div className="flex flex-col gap-3 mt-6">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="btn btn-success w-full font-bold text-white text-lg"
                >
                  {isUpdating ? <span className="loading loading-spinner"></span> : "Save Changes"}
                </button>
                
                <Link
                  href="/my-profile"
                  className="btn btn-outline btn-block text-base-content/70 hover:bg-base-200 hover:text-base-content hover:border-base-300"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
    </ProtectedRoute>
  );
}
