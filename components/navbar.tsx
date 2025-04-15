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
  return (
    <HeroUINavbar
      className="backdrop-blur-none backdrop-saturate-100"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-lg uppercase font-mono",
                  fontMono.variable,
                )}
                color="foreground"
                href={item.href}
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
