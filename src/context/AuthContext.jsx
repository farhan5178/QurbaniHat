"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const storedUser = localStorage.getItem("mock_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const loggedInUser = { email, name: "Test User", photoUrl: "https://via.placeholder.com/150" };
          setUser(loggedInUser);
          localStorage.setItem("mock_user", JSON.stringify(loggedInUser));
          resolve(loggedInUser);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 500);
    });
  };

  const register = (name, email, photoUrl, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const newUser = { name, email, photoUrl };
          setUser(newUser); 
          resolve(newUser);
        } else {
          reject(new Error("Please fill in all required fields"));
        }
      }, 500);
    });
  };

  const googleLogin = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const googleUser = { email: "google_user@gmail.com", name: "Google User", photoUrl: "https://via.placeholder.com/150" };
        setUser(googleUser);
        localStorage.setItem("mock_user", JSON.stringify(googleUser));
        resolve(googleUser);
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mock_user");
    router.push("/login");
  };

  const value = {
    user,
    loading,
    login,
    register,
    googleLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
