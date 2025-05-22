import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

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
  keywords: [
    "portfolio",
    "développeur web",
    "Océane Joppé",
    "ocejpe.fr",
    "ocejpe",
    "front-end",
    "design",
    "projets web",
    "back-end",
    "site professionnel",
    "création web",
    "expérience utilisateur",
    "Portfolio développeur web",
  ],
  authors: [{ name: "Océane Joppé", url: "https://ocejpe.fr" }],
  creator: "Océane Joppé",
  publisher: "Océane Joppé",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ocejpe.fr",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: "Océane Joppé",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://ocejpe.fr/",
  },
  metadataBase: new URL("https://ocejpe.fr/"),
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
          "min-h-screen bg-background font-mono antialiased",
          fontMono.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          <div className="relative flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Contenu de la page */}
            <main className="flex-grow">{children}</main>

            {/* Pied de page */}
            <footer className="w-full flex items-center justify-center">
              <span className="text-xs">
                2025 © Océane Joppé. Tous droits réservés.
              </span>
            </footer>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
