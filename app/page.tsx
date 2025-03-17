import {
  DiscordIcon,
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
} from "@/components/icons";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";

export default function Home() {
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
        <div className="flex pt-10 justify-between">
          {/* Github */}
          <Button color="secondary" endContent={<GithubIcon />}>
            GitHub
          </Button>
          {/* GitLab */}
          <Button color="secondary" endContent={<GitlabIcon />}>
            GitLab
          </Button>
          {/* Discord */}
          <Button color="secondary" endContent={<DiscordIcon />}>
            Discord
          </Button>
          {/* Linkedin */}
          <Button color="secondary" endContent={<LinkedinIcon />}>
            Linkedin
          </Button>
        </div>
      </div>
    </section>
  );
}
