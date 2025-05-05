import { FaGraduationCap, FaMapPin } from "react-icons/fa6";

export default function Formations() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-start justify-center mb-2">
          <div>
            <h3 className="font-semibold text-start text-gray-200">
              Mes formations
            </h3>
            <p className="text-gray-400 text-justify mt-1">
              J&apos;ai d&apos;abord suivi des études d&apos;assistante manager
              avant de me réorienter vers le développement informatique, un
              domaine qui me passionne véritablement.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors">
          <h4 className="font-medium text-gray-200 text-center mb-2">
            BAC +3 Conceptrice Développeuse d&apos;Application (CDA)
          </h4>
          <div className="flex items-center justify-center text-gray-300">
            <FaMapPin className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">CESI - Reims</p>
          </div>
          <div className="flex items-center justify-center mb-4 text-gray-300">
            <FaGraduationCap className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">Obtenu</p>
          </div>
          <div className="text-gray-400 text-sm text-justify">
            Au cours de mon année au CESI, j&apos;ai été formé au métier de chef
            de projet, avec un focus particulier sur l&apos;application de la
            méthodologie agile. J&apos;ai ainsi géré l&apos;ensemble du cycle de
            vie de plusieurs projets, depuis leur conception jusqu&apos;à leur
            évaluation finale. Cette expérience m&apos;a également permis de
            renforcer mes compétences techniques en Next JS et PHP Laravel.
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors">
          <h4 className="font-medium text-gray-200 text-center mb-2">
            BAC +2 Développeur Informatique (DI)
          </h4>
          <div className="flex items-center justify-center text-gray-300">
            <FaMapPin className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">CESI - Reims</p>
          </div>
          <div className="flex items-center justify-center mb-4 text-gray-300">
            <FaGraduationCap className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">Obtenu</p>
          </div>
          <div className="text-gray-400 text-sm text-justify">
            Ce cursus accéléré d&apos;un an, soutenu par la Région, m&apos;a
            permis d&apos;obtenir un diplôme BAC+2 tout en découvrant le monde
            du développement. J&apos;ai exploré divers langages comme PHP, React
            JS, Golang, React Native et C#, et j&apos;ai acquis des compétences
            essentielles telles que la réalisation de tests unitaires, la
            rédaction de documentation et l&apos;utilisation de Github.
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors">
          <h4 className="font-medium text-gray-200 text-center mb-2">
            BTS Assistant Manager (AM)
          </h4>
          <div className="flex items-center justify-center text-gray-300">
            <FaMapPin className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">
              Lycée Frédéric Ozanam - Châlons-en-Champagne
            </p>
          </div>
          <div className="flex items-center justify-center mb-4 text-gray-300">
            <FaGraduationCap className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">Obtenu</p>
          </div>
          <div className="text-gray-400 text-sm text-justify">
            Fort de mon parcours antérieur, j&apos;ai approfondi mes
            connaissances et appris les rouages du métier d&apos;assistante de
            manager. J&apos;ai développé des compétences essentielles telles que
            la prise de notes en réunion, la maîtrise des logiciels
            bureautiques, la rédaction de comptes rendus, ainsi que des qualités
            d&apos;organisation, de rigueur et de polyvalence.
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors">
          <h4 className="font-medium text-gray-200 text-center mb-2">
            BAC Science et Technologies du Management et de la Gestion (STMG)
          </h4>
          <div className="flex items-center justify-center text-gray-300">
            <FaMapPin className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">
              Lycée Frédéric Ozanam - Châlons-en-Champagne
            </p>
          </div>
          <div className="flex items-center justify-center mb-4 text-gray-300">
            <FaGraduationCap className="mr-3 flex-shrink-0 text-blue-400" />
            <p className="text-gray-400 text-sm text-center">Obtenu</p>
          </div>
          <div className="text-gray-400 text-sm text-justify">
            Ce BAC, orienté vers le monde de l&apos;entreprise, m&apos;a fourni
            une base solide en management, droit et économie. En choisissant la
            spécialisation Ressources Humaines, j&apos;ai pu découvrir les
            aspects concrets de ce domaine, notamment la lecture de fiches de
            paie et le fonctionnement des congés et des primes.
          </div>
        </div>
      </div>
    </div>
  );
}
