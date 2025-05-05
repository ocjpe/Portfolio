import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";

interface Props {
  alt: string;
  src: string;
  type: string;
  title: string;
  explain: string;
  content: string;
  link: string;
  color: string;
  colorButton:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  icon: React.ReactNode;
}

export default function Projet(props: Props) {
  const {
    alt,
    src,
    type,
    title,
    explain,
    content,
    link,
    color,
    colorButton,
    icon,
  } = props;

  return (
    <Card className="group relative bg-gray-900/50 border border-gray-800 hover:border-blue-500 transition-all duration-300 w-[400px] h-[550px] backdrop-blur-sm">
      <CardBody className="overflow-hidden p-0">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img
            alt={alt}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            height={200}
            src={src}
            width={270}
          />
          <div
            className={`absolute top-3 right-3 bg-${color}-900/80 text-${color}-100 text-xs font-medium px-2 py-1 rounded z-20`}
          >
            {type}
          </div>
        </div>
        <div className="m-2">
          <h2 className="text-xl font-semibold text-center text-gray-100 mb-2">
            {title}
          </h2>
          <p className="text-default-500 text-sm text-justify">{explain}</p>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <Button
          as={Link}
          color={colorButton}
          endContent={icon}
          href={link}
          variant="flat"
        >
          {content}
        </Button>
      </CardFooter>
    </Card>
  );
}
