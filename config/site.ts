export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Océane Joppé - Portfolio",
  description:
    "Portfolio de Océane Joppé - Développeuse web front-end et back-end. Découvrez mes réalisations sur ici ! ",
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
    linkedin: "https://linkedin.com/in/oceane-joppe",
    cv: "/public/cv.pdf",
  },
};
