"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("mock_user");
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Failed to parse mock_user from localStorage", e);
      localStorage.removeItem("mock_user");
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !password) {
          return reject(new Error("Invalid email or password"));
        }

        let registeredUsers = [];
        try {
          const registeredUsersStr = localStorage.getItem("registered_users");
          registeredUsers = registeredUsersStr ? JSON.parse(registeredUsersStr) : [];
        } catch (e) {}
        
        const existingUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!existingUser) {
          return reject(new Error("User not found"));
        }

        // Allow login if password matches, OR if the existing user was created before we added password support
        if (existingUser.password && existingUser.password !== password) {
          return reject(new Error("Incorrect password"));
        }

        const loggedInUser = {
          email: existingUser.email,
          name: existingUser.name,
          photoUrl: existingUser.photoUrl
        };
        
        setUser(loggedInUser);
        localStorage.setItem("mock_user", JSON.stringify(loggedInUser));
        resolve(loggedInUser);
      }, 500);
    });
  };

  const register = (name, email, photoUrl, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!name || !email || !password) {
          return reject(new Error("Please fill in all required fields"));
        }

        const registeredUsersStr = localStorage.getItem("registered_users");
        const registeredUsers = registeredUsersStr ? JSON.parse(registeredUsersStr) : [];
        
        const existingUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (existingUser) {
          return reject(new Error("Email is already registered"));
        }

        const newUser = { name, email, photoUrl, password };
        registeredUsers.push(newUser);
        localStorage.setItem("registered_users", JSON.stringify(registeredUsers));
        
        resolve(newUser);
      }, 500);
    });
  };

  const googleLogin = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const googleUser = { 
          email: "google_user@gmail.com", 
          name: "Google User", 
          photoUrl: "https://via.placeholder.com/150" 
        };
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

  const updateUser = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedUser = { ...user };
        
        if (data.name) updatedUser.name = data.name;
        if (data.image) updatedUser.photoUrl = data.image;
        
        setUser(updatedUser);
        localStorage.setItem("mock_user", JSON.stringify(updatedUser));

        const registeredUsersStr = localStorage.getItem("registered_users");
        if (registeredUsersStr) {
          try {
            const registeredUsers = JSON.parse(registeredUsersStr);
            const index = registeredUsers.findIndex(
              (u) => u.email?.toLowerCase() === updatedUser.email?.toLowerCase()
            );
            
            if (index !== -1) {
              registeredUsers[index].name = updatedUser.name;
              registeredUsers[index].photoUrl = updatedUser.photoUrl;
              localStorage.setItem("registered_users", JSON.stringify(registeredUsers));
            }
          } catch (e) {}
        }
        
        resolve({ data: { user: updatedUser } });
      }, 500);
    });
  };

  const value = {
    user,
    loading,
    login,
    register,
    googleLogin,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
