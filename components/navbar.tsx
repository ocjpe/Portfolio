"use client";
import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontMono } from "@/config/fonts";

export const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState("/");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleItemClick = (href: string) => {
    setActiveItem(href);
    setIsMenuOpen(false);
  };

  return (
    <HeroUINavbar
      className="backdrop-blur-none backdrop-saturate-100"
      isMenuOpen={isMenuOpen}
      maxWidth="lg"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Toggle du menu hamburger sur mobile */}
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="text-blue-500 hover:text-blue-600"
        />
      </NavbarContent>

      {/* Menu pour desktop */}
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <ul className="flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={activeItem === item.href}>
              <NextLink
                className={clsx(
                  "text-lg uppercase font-mono transition-colors duration-200 hover:text-blue-400",
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

      {/* Menu mobile qui s'affiche lorsque le toggle est cliqué */}
      <NavbarMenu className="pt-6 bg-background/95 backdrop-blur-md">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
              className={clsx(
                "w-full text-center block py-3 text-lg uppercase font-mono",
                fontMono.variable,
                activeItem === item.href
                  ? "text-blue-500 font-semibold"
                  : "text-foreground",
              )}
              href={item.href}
              onClick={() => handleItemClick(item.href)}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
