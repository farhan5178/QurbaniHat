"use client";

import { AuthProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }) {
  return (
    <AuthProvider>
      {children}
      <ToastContainer position="top-center" autoClose={3000} />
    </AuthProvider>
  );
}
