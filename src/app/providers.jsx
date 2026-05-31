"use client";

import { HeroUIProvider } from "@heroui/react";
import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <AuthProvider>
        {children}
        <ToastContainer position="top-center" autoClose={3000} />
      </AuthProvider>
    </HeroUIProvider>
  );
}
