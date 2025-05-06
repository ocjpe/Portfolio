"use client";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";

interface Props {
  alt: string;
  src: string;
  type: string;
  title: string;
  explain: string;
  content: string;
  link: string;
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
  const { alt, src, type, title, explain, content, link, colorButton, icon } =
    props;

  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="group relative bg-gray-900/50 border border-gray-800 hover:border-blue-500 transition-all duration-300 w-full max-w-md mx-auto h-auto min-h-[450px] sm:min-h-[500px] backdrop-blur-sm">
      <CardBody className="overflow-hidden p-0">
        <div className="relative h-36 sm:h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={src}
          />
          <div className="absolute top-3 right-3 bg-blue-900/80 text-blue-100 text-xs font-medium px-2 py-1 rounded z-20">
            {type}
          </div>
        </div>
        <div className="p-3 sm:p-4">
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-100 mb-2">
            {title}
          </h2>
          <p className="text-default-500 text-xs sm:text-sm text-justify line-clamp-[12] sm:line-clamp-none">
            {explain}
          </p>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between p-2 sm:p-4">
        <Button
          className="text-xs sm:text-sm"
          color={colorButton}
          endContent={icon}
          size="sm"
          variant="flat"
          onPress={() => handleRedirect(link)}
        >
          {content}
        </Button>
      </CardFooter>
    </Card>
  );
}
