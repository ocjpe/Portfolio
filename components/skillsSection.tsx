import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import {
  FaReact,
  FaLaravel,
  FaHtml5,
  FaPhp,
  FaPython,
  FaGolang,
  FaNodeJs,
  FaLinux,
  FaDocker,
  FaGitAlt,
  FaPeopleGroup,
  FaPuzzlePiece,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJirasoftware,
} from "react-icons/si";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiOrganizationChart,
} from "react-icons/ri";
import { LuMessagesSquare } from "react-icons/lu";
import { TbExchange } from "react-icons/tb";

import { title, subtitle } from "@/components/primitives";

export default function SkillsSection() {
  // Langages et technologies
  const technicalSkills = [
    {
      category: "FRONT-END",
      skills: [
        { name: "JavaScript", icon: <RiJavascriptFill size={25} /> },
        { name: "React", icon: <FaReact size={25} /> },
        { name: "Next.js", icon: <RiNextjsFill size={25} /> },
        { name: "HTML/CSS", icon: <FaHtml5 size={25} /> },
      ],
    },
    {
      category: "Back-end",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={25} /> },
        { name: "Python", icon: <FaPython size={25} /> },
        { name: "Go", icon: <FaGolang size={25} /> },
        { name: "PHP", icon: <FaPhp size={25} /> },
        { name: "Laravel", icon: <FaLaravel size={25} /> },
      ],
    },
    {
      category: "Bases de données",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={25} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={25} /> },
        { name: "MySQL", icon: <SiMysql size={25} /> },
      ],
    },
    {
      category: "Outils",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt size={25} />,
        },
        { name: "Docker", icon: <FaDocker size={25} /> },
        { name: "Linux", icon: <FaLinux size={25} /> },
        { name: "Jira", icon: <SiJirasoftware size={25} /> },
      ],
    },
  ];

  // Soft skills
  const softSkills = [
    {
      name: "Travail d'équipe",
      description:
        "Collaboration efficace sur des projets multi-équipes pour optimiser les résultats.",
      icon: <FaPeopleGroup />,
    },
    {
      name: "Communication",
      description:
        "Capacité à vulgariser des concepts techniques pour tous types d'interlocuteurs.",
      icon: <LuMessagesSquare />,
    },
    {
      name: "Résolution de problèmes",
      description:
        "Approche méthodique pour identifier et résoudre les défis techniques.",
      icon: <FaPuzzlePiece />,
    },
    {
      name: "Adaptabilité",
      description:
        "Flexibilité face aux changements de priorités et aux nouvelles technologies.",
      icon: <TbExchange />,
    },
    {
      name: "Organisation",
      description:
        "Gestion rigoureuse des délais et des ressources pour livrer dans les temps.",
      icon: <RiOrganizationChart />,
    },
  ];

  return (
    <section className="flex flex-col items-start justify-around py-16 md:py-20">
      {/* Titre de section */}
      <div className="mb-6">
        <span className={title({ size: "md" })}>{"Mes "}</span>
        <span className={title({ size: "md", color: "gradient" })}>
          compétences
        </span>
      </div>

      {/* Compétences techniques */}
      <div className="w-full mb-16">
        <span className={subtitle({ className: "mb-6" })}>
          Compétences techniques
        </span>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 mt-6">
          {technicalSkills.map((category, index) => (
            <Card
              key={index}
              className="bg-black bg-opacity-40 border border-gray-800"
            >
              <CardBody key={index} className="items-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.category}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <Chip
                    key={skillIndex}
                    className="mb-3"
                    color="secondary"
                    radius="sm"
                    size="lg"
                    startContent={skill.icon}
                    variant="flat"
                  >
                    <span className="pl-1">{skill.name}</span>
                  </Chip>
                ))}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div className="w-full">
        <span className={subtitle({ className: "mb-6" })}>Soft skills</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {softSkills.map((skill, index) => (
            <Card
              key={index}
              className="bg-black bg-opacity-40 border border-gray-800"
            >
              <CardBody className="text-center p-6">
                <div className="flex text-4xl mb-4 justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
