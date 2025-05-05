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
    <section className="h-[calc(100vh-64px)] flex flex-col justify-center px-3 md:px-7">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-start md:w-1/2">
          {/* Titre */}
          <div>
            <span className={title({ size: "lg" })}>{"Bonjour. Je suis "}</span>
            <span className={title({ size: "lg", color: "gradient" })}>
              Océane
            </span>
            <span className={title({ size: "lg" })}>{", "}</span>
          </div>
          <br />
          <div className="mb-8 whitespace-nowrap">
            <span className={title({ size: "lg", color: "gradient" })}>
              développeuse informatique
            </span>
          </div>

          {/* Texte d'introduction */}
          <div>
            <p className="text-gray-300 text-lg text-justify">
              Bienvenue sur mon portfolio ! Je m&apos;appelle Océane JOPPÉ, je
              suis développeuse et conceptrice d&apos;applications basée à
              Montpellier depuis septembre 2024. Je suis originaire de
              Châlons-en-Champagne dans la Marne, j&apos;ai entrepris une
              reconversion professionnelle qui m&apos;a menée au métier qui me
              passionne aujourd&apos;hui : le développement informatique.
            </p>
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
            <Button
              className="mr-6"
              color="primary"
              endContent={<PiReadCvLogoFill size={25} />}
              name="CV"
              variant="flat"
              onPress={() =>
                window.open("/cv.pdf", "_blank", "noopener noreferrer")
              }
            >
              CV
            </Button>
            <Button
              as={Link}
              className="mr-6"
              color="primary"
              endContent={<MdAlternateEmail size={25} />}
              href="mailto:oceane.joppe@gmail.com"
              name="CV"
              variant="flat"
            >
              Email
            </Button>
          </div>
        </div>

        {/* Image Portrait */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
          <div className="relative">
            <div className="absolute w-full max-w-lg h-[16rem] bg-blue-600 rounded-t-full top-16 left-1/2 transform -translate-x-1/2 shadow-xl shadow-blue-900" />

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
    </section>
  );
}
