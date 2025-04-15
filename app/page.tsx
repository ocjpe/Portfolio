"use client";
import { Button } from "@heroui/button";
import {
  FaGithub,
  FaLinkedin,
  FaGitlab,
  FaArrowDownLong,
} from "react-icons/fa6";
import Image from "next/image";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      url: siteConfig.links.github,
      icon: <FaGithub size={25} />,
    },
    {
      name: "GitLab",
      url: siteConfig.links.gitlab,
      icon: <FaGitlab size={25} />,
    },
    {
      name: "LinkedIn",
      url: siteConfig.links.linkedin,
      icon: <FaLinkedin size={25} />,
    },
  ];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Section d'introduction - prend en compte l'espace de la navbar */}
      <section className="h-[calc(100vh-64px)] flex flex-col justify-center px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Texte d'introduction */}
          <div className="text-start md:w-1/2 whitespace-nowrap">
            {/* Titre */}
            <div>
              <span className={title({ size: "lg" })}>
                {"Bonjour. Je suis "}
              </span>
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
                  color="primary"
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

          {/* Image stylisée */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
            {/* Conteneur pour le positionnement relatif */}
            <div className="relative">
              {/* Fond bleu considérablement agrandi */}
              <div className="absolute w-full max-w-lg h-[16rem] bg-blue-600 rounded-t-full top-16 left-1/2 transform -translate-x-1/2 shadow-xl shadow-blue-900" />

              {/* Image centrée sur le fond bleu */}
              <div className="relative w-80 mx-auto">
                <Image
                  alt="Portrait d'Océane"
                  className="object-cover relative z-10"
                  height={320}
                  src="/photo.png"
                  width={320}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowDownLong size="25" />
        </div>
      </section>

      {/* Section des compétences */}
      <section className="min-h-screen py-12 px-4 md:px-8">
        <SkillsSection />
      </section>
    </>
  );
}
