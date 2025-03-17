export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Océane's portfolio",
  description: "Voici mon parcours professionnel.",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "À propos de moi",
      href: "/about",
    },
    {
      label: "Expériences",
      href: "/experiences",
    },
    {
      label: "Projets",
      href: "/projets",
    },
  ],

  links: {
    github: "https://github.com/ocjpe",
    gitlab: "https://gitlab.com/ocejpe",
    discord: "https://discord.gg/9b6yyZKmH4",
    linkedin: "",
  },
};
