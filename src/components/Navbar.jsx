"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;

  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <div className="bg-base-100 sticky top-0 z-50 border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-base-200">
              <li><Link href="/" onClick={closeDropdown} className="font-medium text-base py-3">Home</Link></li>
              <li><Link href="/animals" onClick={closeDropdown} className="font-medium text-base py-3">All Animals</Link></li>
              {!isLoggedIn ? (
                <>
                  <li><Link href="/login" onClick={closeDropdown} className="font-medium text-base py-3">Login</Link></li>
                  <li><Link href="/register" onClick={closeDropdown} className="font-medium text-success text-base py-3">Register</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/my-profile" onClick={closeDropdown} className="font-medium text-base py-3">My Profile</Link></li>
                  <li><button onClick={() => { closeDropdown(); logout(); }} className="font-medium text-error text-base py-3">Logout</button></li>
                </>
              )}
            </ul>
          </div>
          <Link href="/" className="font-bold text-2xl text-success tracking-tight">Qurbanihat</Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link href="/" className="font-medium hover:text-success text-base">Home</Link></li>
            <li><Link href="/animals" className="font-medium hover:text-success text-base">All Animals</Link></li>
          </ul>
        </div>
        
        <div className="navbar-end gap-3 hidden sm:flex">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link href="/my-profile" className="text-sm font-semibold hover:text-success">My Profile</Link>
              <div className="avatar placeholder cursor-pointer">
                <div className="bg-success text-success-content rounded-full w-10">
                  <span className="text-lg font-bold">{user?.name?.charAt(0).toUpperCase() || "U"}</span>
                </div>
              </div>
              <button onClick={logout} className="btn btn-error btn-sm font-bold text-white">Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn btn-ghost font-bold">Login</Link>
              <Link href="/register" className="btn btn-success text-white font-bold">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
