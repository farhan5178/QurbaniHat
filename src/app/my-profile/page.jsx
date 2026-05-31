"use client";

import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Card, Avatar, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function MyProfile() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 animate__animated animate__fadeIn">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl rounded-2xl overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
          <div className="p-8 flex flex-col items-center text-center">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors duration-300"></div>
              <Avatar
                src={user.photoUrl || user.image}
                name={user.name}
                className="w-32 h-32 text-large shadow-lg border-4 border-white dark:border-gray-800 relative z-10"
                isBordered
                color="primary"
              />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-inter tracking-tight">
              {user.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">
              {user.email}
            </p>
            
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              className="w-full font-semibold rounded-xl bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary transition-all duration-300 shadow-primary/30"
              onPress={() => router.push("/my-profile/update")}
            >
              Update Information
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
    </ProtectedRoute>
  );
}
