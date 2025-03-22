"use client";

import { Button } from "@heroui/button";

import { GithubIcon, GitlabIcon, LinkedinIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      url: siteConfig.links.github,
      icon: <GithubIcon />,
    },
    {
      name: "GitLab",
      url: siteConfig.links.gitlab,
      icon: <GitlabIcon />,
    },
    {
      name: "LinkedIn",
      url: siteConfig.links.linkedin,
      icon: <LinkedinIcon />,
    },
  ];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex flex-col items-start justify-around py-10 md:py-10">
      <div className="text-start justify-around">
        {/* Titre */}
        <div>
          <span className={title({ size: "lg" })}>{"Bonjour. Je suis "}</span>
          <span className={title({ size: "lg", color: "gradient" })}>
            Océane
          </span>
          <span className={title({ size: "lg" })}>{", "}</span>
        </div>
        <br />
        <div>
          <span className={title({ size: "lg", color: "gradient" })}>
            développeuse informatique
          </span>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex pt-10">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              className="mr-6"
              color="secondary"
              endContent={link.icon}
              name={link.name.toLowerCase()}
              variant="flat"
              onPress={() => handleRedirect(link.url)}
            >
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
