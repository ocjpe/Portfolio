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

export default function Skills() {
  // Langages et technologies
  const technicalSkills = [
    {
      category: "Front-end",
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
    <section className="flex flex-col items-start justify-around w-full px-4 md:px-0">
      {/* Titre de section */}
      <h3 className="font-semibold text-gray-200">
        Mes compétences techniques
      </h3>

      {/* Compétences techniques */}
      <div className="w-full mb-8 md:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6">
          {technicalSkills.map((category, index) => (
            <Card
              key={index}
              className="bg-black bg-opacity-40 border border-gray-800"
            >
              <CardBody key={index}>
                <h3 className="text-lg text-center font-semibold text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      className="mb-2"
                      color="secondary"
                      radius="sm"
                      size="md"
                      startContent={
                        <div className="flex items-center">{skill.icon}</div>
                      }
                      variant="flat"
                    >
                      <span className="pl-1 text-sm">{skill.name}</span>
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div className="w-full">
        <h3 className="font-semibold text-gray-200 text-start">
          Mon savoir-être
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
          {softSkills.map((skill, index) => (
            <Card
              key={index}
              className="bg-black bg-opacity-40 border border-gray-800"
            >
              <CardBody className="text-center p-4 md:p-6">
                <div className="flex text-xl mb-3 justify-center text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-m font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-300 text-sm text-justify">
                  {skill.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
