"use client";
import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontMono } from "@/config/fonts";

export const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState("/");

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  return (
    <HeroUINavbar
      className="backdrop-blur-none backdrop-saturate-100"
      maxWidth="lg"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={activeItem === item.href}>
              <NextLink
                className={clsx(
                  "text-lg uppercase font-mono",
                  fontMono.variable,
                  activeItem === item.href ? "text-blue-500" : "",
                )}
                color="foreground"
                href={item.href}
                onClick={() => handleItemClick(item.href)}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
    </HeroUINavbar>
  );
};
