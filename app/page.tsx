"use client";
import Image from "next/image";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      url: siteConfig.links.github,
      icon: <FaGithub className="sm:text-2xl" size={22} />,
    },
    {
      name: "GitLab",
      url: siteConfig.links.gitlab,
      icon: <FaGitlab className="sm:text-2xl" size={22} />,
    },
    {
      name: "LinkedIn",
      url: siteConfig.links.linkedin,
      icon: <FaLinkedin className="sm:text-2xl" size={22} />,
    },
  ];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center px-4 py-8 md:px-7">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        <div className="text-center md:text-start w-full md:w-1/2">
          {/* Titre */}
          <div className="mb-2">
            <span className={title({ size: "md", class: "sm:text-5xl" })}>
              {"Bonjour. Je suis "}
            </span>
            <span
              className={title({
                size: "md",
                color: "gradient",
                class: "sm:text-5xl",
              })}
            >
              Océane
            </span>
            <span className={title({ size: "md", class: "sm:text-5xl" })}>
              {", "}
            </span>
          </div>

          <div className="mb-6 md:mb-8">
            <span
              className={title({
                size: "md",
                color: "gradient",
                class: "sm:text-5xl",
              })}
            >
              développeuse informatique
            </span>
          </div>

          {/* Texte d'introduction */}
          <div>
            <p className="text-gray-300 text-base sm:text-lg text-justify">
              Bienvenue sur mon portfolio ! Je m&apos;appelle Océane JOPPÉ, je
              suis développeuse et conceptrice d&apos;applications basée à
              Montpellier depuis septembre 2024. Je suis originaire de
              Châlons-en-Champagne dans la Marne, j&apos;ai entrepris une
              reconversion professionnelle qui m&apos;a menée au métier qui me
              passionne aujourd&apos;hui : le développement informatique.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex flex-wrap gap-2 pt-6 md:pt-10">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                className="text-xs sm:text-sm"
                color="primary"
                endContent={link.icon}
                name={link.name.toLowerCase()}
                radius="full"
                size="sm"
                variant="flat"
                onPress={() => handleRedirect(link.url)}
              >
                {link.name}
              </Button>
            ))}
            <Button
              className="text-xs sm:text-sm"
              color="primary"
              endContent={
                <PiReadCvLogoFill className="sm:text-2xl" size={22} />
              }
              name="CV"
              radius="full"
              size="sm"
              variant="flat"
              onPress={() =>
                window.open("/cv.pdf", "_blank", "noopener noreferrer")
              }
            >
              CV
            </Button>
            <Button
              as={Link}
              className="text-xs sm:text-sm"
              color="primary"
              endContent={
                <MdAlternateEmail className="sm:text-2xl" size={22} />
              }
              href="mailto:oceane.joppe@gmail.com"
              name="Email"
              radius="full"
              size="sm"
              variant="flat"
            >
              Email
            </Button>
          </div>
        </div>

        {/* Image Portrait */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute w-full max-w-xs sm:max-w-md h-40 sm:h-52 bg-blue-600 rounded-t-full top-10 sm:top-16 left-1/2 transform -translate-x-1/2 shadow-xl shadow-blue-900" />

            <div className="relative w-60 sm:w-72 md:w-80 mx-auto">
              <Image
                priority
                alt="Portrait d'Océane"
                className="object-cover relative z-10"
                height={280}
                src="/photo.png"
                width={280}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
