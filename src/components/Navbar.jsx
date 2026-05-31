"use client";

import { useState } from "react";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link as HeroLink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar } from "@heroui/react";
import NextLink from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;

  return (
    <HeroNavbar onMenuOpenChange={setIsMenuOpen} classNames={{ wrapper: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-700"
          icon={(isOpen) => (
            isOpen ? (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          )}
        />
        <NavbarBrand>
          <NextLink href="/" className="font-bold text-inherit text-2xl text-success">
            Qurbanihat
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <HeroLink as={NextLink} color="foreground" href="/">
            Home
          </HeroLink>
        </NavbarItem>
        <NavbarItem>
          <HeroLink as={NextLink} color="foreground" href="/animals">
            All Animals
          </HeroLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        {isLoggedIn ? (
          <NavbarItem className="flex gap-4 items-center">
            <HeroLink as={NextLink} href="/my-profile" className="text-sm font-semibold text-gray-700 hover:text-success">
              My Profile
            </HeroLink>
            <Avatar src={user?.photoUrl || user?.image} name={user?.name?.charAt(0) || "U"} />
            <Button color="danger" variant="flat" onClick={logout}>
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem>
              <Button as={NextLink} color="success" href="/login" variant="light">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={NextLink} color="success" href="/register" variant="flat">
                Register
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <HeroLink as={NextLink} color="foreground" className="w-full" href="/" size="lg">
            Home
          </HeroLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <HeroLink as={NextLink} color="foreground" className="w-full" href="/animals" size="lg">
            All Animals
          </HeroLink>
        </NavbarMenuItem>
        {!isLoggedIn ? (
          <>
            <NavbarMenuItem>
              <HeroLink as={NextLink} color="foreground" className="w-full" href="/login" size="lg">
                Login
              </HeroLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <HeroLink as={NextLink} color="success" className="w-full font-semibold" href="/register" size="lg">
                Register
              </HeroLink>
            </NavbarMenuItem>
          </>
        ) : (
          <>
            <NavbarMenuItem>
              <HeroLink as={NextLink} color="foreground" className="w-full" href="/my-profile" size="lg">
                My Profile
              </HeroLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <HeroLink color="danger" className="w-full cursor-pointer" onClick={logout} size="lg">
                Logout
              </HeroLink>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </HeroNavbar>
  );
}
