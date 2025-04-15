import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { fontMono } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-mono antialiased m-2",
          fontMono.variable
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            {/* Modification: suppression des classes container, padding et margin */}
            <main className="flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <span className="text-xs">
                2025 © Océane Joppé. Tous droits réservés.
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}