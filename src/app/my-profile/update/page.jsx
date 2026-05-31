"use client";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Card, Input, Button } from "@heroui/react";
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
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 animate__animated animate__fadeIn">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
          <div className="p-8">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-inter">
                Update Information
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Make changes to your profile details
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                label="Full Name"
                variant="bordered"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isRequired
                classNames={{
                  inputWrapper: "border-gray-200 dark:border-gray-700",
                }}
              />
              <Input
                label="Profile Image URL"
                variant="bordered"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                classNames={{
                  inputWrapper: "border-gray-200 dark:border-gray-700",
                }}
              />
              
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  type="submit"
                  color="primary"
                  variant="shadow"
                  size="lg"
                  isLoading={isUpdating}
                  className="w-full font-semibold rounded-xl bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary transition-all duration-300 shadow-primary/30"
                >
                  Update Information
                </Button>
                
                <Button
                  as={Link}
                  href="/my-profile"
                  variant="light"
                  size="lg"
                  className="w-full font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </motion.div>
    </div>
    </ProtectedRoute>
  );
}
