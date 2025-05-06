import { FaCode } from "react-icons/fa6";

import Projet from "./projet";

export default function ProjetsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4 pb-8 sm:pb-12 md:pb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-3 sm:mb-5">
        Mes Projets
      </h2>
      <p className="text-gray-300 text-base sm:text-lg text-center mb-5 sm:mb-8 px-2 md:px-8 lg:px-16">
        Le contenu de cette page évoluera en parallèle de la réalisation des
        projets.
      </p>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {/* Projet 1 */}
        <Projet
          alt="Visuel du Portfolio"
          colorButton="primary"
          content="Code"
          explain="Pour la construction de ce portfolio, j'ai opté pour Next.js, un framework React qui facilite grandement le développement.
            J'ai ensuite tiré parti de la puissance de Hero UI et de la flexibilité de Tailwind CSS pour concevoir une interface à la fois moderne et intuitive.
            Le déploiement continu est assuré par Vercel, et le versionnement du code est géré via GitLab. Ce projet a été une excellente opportunité pour moi
            de me concentrer sur l'amélioration de l'expérience utilisateur et du design de l'interface."
          icon={<FaCode />}
          link="https://github.com/ocjpe/Portfolio"
          src="/portfolio.png"
          title="Portfolio"
          type="Web"
        />

        {/* Projet 2 */}
        <Projet
          alt="Visuel du site"
          colorButton="primary"
          content="Code"
          explain="Il s'agit d'un site internet qui a été développé dans le but d'aider une sexologue à se lancer en tant qu'auto-entrepreneuse.
            Sa fonction principale était de lui permettre de se présenter en ligne et de détailler les différentes prestations qu'elle proposait dans son domaine
            d'expertise. Le choix de Next.js et de Tailwind CSS a permis de créer un site qui correspondait parfaitement à l'image qu'elle souhaitait véhiculer.
            Le site a été déployé sur Vercel et son code source est accessible sur GitLab (avec une migration future vers GitHub). Il est important de préciser que
            ce site n'est plus en service."
          icon={<FaCode />}
          link="https://github.com/ocjpe/C-Adapte"
          src="/c-adapte.png"
          title="C'Adapté"
          type="Web"
        />
      </div>
    </div>
  );
}
