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
          className="sm:hidden"
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

      <NavbarContent justify="end">
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
            <NavbarItem className="hidden lg:flex">
              <HeroLink as={NextLink} href="/login">Login</HeroLink>
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
          <NavbarMenuItem>
            <HeroLink as={NextLink} color="foreground" className="w-full" href="/login" size="lg">
              Login
            </HeroLink>
          </NavbarMenuItem>
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
