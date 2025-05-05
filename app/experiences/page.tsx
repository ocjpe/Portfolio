import React from "react";
export default function ExperiencesPage() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-10">
          Expériences Professionnelles
        </h2>

        {/* Timeline des expériences */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600" />

          {/* Expérience 1 */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
            {/* Point sur la timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-black z-10" />

            {/* Contenu à gauche pour desktop, en haut pour mobile */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pr-10 md:text-right order-2 md:order-1">
              <div className="p-6 bg-gray-900/60 rounded-lg border border-gray-700 hover:border-blue-500 transition-all shadow-lg backdrop-blur-sm hover:shadow-blue-500/20">
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-blue-900/50 text-blue-300">
                  Septembre 2023 - Septembre 2024
                </span>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Alternante Analyste Programmeuse
                </h3>
                <h4 className="text-blue-400 mb-3">
                  Mairistem - Saint Martin sur le Pré, Marne
                </h4>
                <p className="text-gray-300 text-justify text-sm">
                  Mon alternance au sein du pôle administrés m&apos;a permis
                  d&apos;évoluer sur la reprise de deux produits importants : le
                  Gestionnaire d’annotations, qui est désormais finalisé, et le
                  Recensement Citoyen Obligatoire. Nous avons appliqué la
                  méthodologie Agile Scrum pour la gestion de ces projets.
                  J&apos;ai ainsi travaillé dans un environnement métier
                  comprenant la Mairie, les processus de Recensement et
                  d&apos;État Civil, et la relation avec les administrés.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/40 text-blue-300">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/40 text-green-300">
                    PHP Laravel
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-900/40 text-purple-300">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-lime-900/40 text-lime-300">
                    Jest
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/40 text-indigo-300">
                    PHP Unit
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-900/40 text-orange-300">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-900/40 text-slate-300">
                    Insomnia
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-900/40 text-red-300">
                    GitLab
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-900/40 text-yellow-300">
                    Docker
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-pink-900/40 text-pink-300">
                    JasperStudio
                  </span>
                </div>
              </div>
            </div>

            {/* Espace vide à droite pour desktop, invisible en mobile */}
            <div className="w-full md:w-5/12 order-1 md:order-2" />
          </div>

          {/* Expérience 2 */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
            {/* Point sur la timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-black z-10" />

            {/* Espace vide à gauche pour desktop, invisible en mobile */}
            <div className="w-full md:w-5/12 order-2 md:order-1" />

            {/* Contenu à droite pour desktop, en haut pour mobile */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pl-10 order-1 md:order-2">
              <div className="p-6 bg-gray-900/60 rounded-lg border border-gray-700 hover:border-purple-500 transition-all shadow-lg backdrop-blur-sm hover:shadow-purple-500/20">
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-indigo-900/50 text-indigo-300">
                  Octobre 2022 - Juin 2023
                </span>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Stagiaire Développement Web
                </h3>
                <h4 className="text-purple-400 mb-3">
                  Mairistem - Saint Martin Sur Le Pré, Marne
                </h4>
                <p className="text-gray-300 text-justify text-sm">
                  J&apos;ai eu ma première expérience en développement et en
                  méthodologie de travail en participant à la création du
                  produit Recensement Citoyen Obligatoire pour le pôle
                  administrés. Ce projet s&apos;est déroulé avec un suivi
                  rigoureux de la maquette fournie par le Product Owner.
                  L&apos;environnement métier comprenait la Mairie, le service
                  du Recensement et les interactions avec les administrés.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/40 text-blue-300">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/40 text-green-300">
                    PHP Laravel / Lumen
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-900/40 text-purple-300">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-lime-900/40 text-lime-300">
                    Jest
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/40 text-indigo-300">
                    PHP Unit
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-900/40 text-orange-300">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-900/40 text-slate-300">
                    Insomnia
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-900/40 text-red-300">
                    GitLab
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-900/40 text-yellow-300">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience 3 */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between">
            {/* Point sur la timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-indigo-400 border-4 border-black z-10" />

            {/* Contenu à gauche pour desktop, en haut pour mobile */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pr-10 md:text-right order-2 md:order-1">
              <div className="p-6 bg-gray-900/60 rounded-lg border border-gray-700 hover:border-blue-500 transition-all shadow-lg backdrop-blur-sm hover:shadow-blue-500/20">
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-purple-900/50 text-purple-300">
                  Mars 2022 - Avril 2022
                </span>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Assistante Gestionnaire Intérimaire
                </h3>
                <h4 className="text-blue-400 mb-3">
                  Bergerat Monnoyeur - Saint Martin sur le Pré, Marne
                </h4>
                <p className="text-gray-300 text-justify text-sm">
                  Durant ce poste, j&apos;ai géré l&apos;achat de matériel pour
                  les mécaniciens, créé et validé des bons de commande, préparé
                  les fiches d&apos;entrée/sortie des machines, et assuré la
                  réception des appels, ce qui a contribué à améliorer ma
                  communication orale, mon organisation, mon esprit
                  d&apos;équipe et ma polyvalence.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/40 text-blue-300">
                    Communication
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/40 text-green-300">
                    Travail d&apos;équipe
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-900/40 text-red-300">
                    Polyvalence
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/40 text-indigo-300">
                    Adaptabilité
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-900/40 text-teal-300">
                    Rigoureuse
                  </span>
                </div>
              </div>
            </div>

            {/* Espace vide à droite pour desktop, invisible en mobile */}
            <div className="w-full md:w-5/12 order-1 md:order-2" />
          </div>

          {/* Expérience 4 */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
            {/* Point sur la timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-violet-500 border-4 border-black z-10" />

            {/* Espace vide à gauche pour desktop, invisible en mobile */}
            <div className="w-full md:w-5/12 order-2 md:order-1" />

            {/* Contenu à droite pour desktop, en haut pour mobile */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pl-10 order-1 md:order-2">
              <div className="p-6 bg-gray-900/60 rounded-lg border border-gray-700 hover:border-purple-500 transition-all shadow-lg backdrop-blur-sm hover:shadow-purple-500/20">
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-indigo-900/50 text-indigo-300">
                  Décembre 2021 - Janvier 2022
                </span>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Agente de facilitation de la vie sociale
                </h3>
                <h4 className="text-purple-400 mb-3">
                  Secours Populaire - Châlons-en-Champagne, Marne
                </h4>
                <p className="text-gray-300 text-justify text-sm">
                  J&apos;ai été chargé d&apos;accueillir les personnes en
                  difficulté, d&apos;analyser leur situation pour déterminer
                  leur éligibilité aux aides du Secours Populaire et de les
                  inscrire au registre. J&apos;ai également participé aux
                  distributions alimentaires bi-hebdomadaires, ce qui a renforcé
                  mon empathie, ma communication orale et mon sens de
                  l&apos;organisation.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/40 text-blue-300">
                    Communication orale
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/40 text-green-300">
                    Preuve d&apos;empathie
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-900/40 text-purple-300">
                    Sens de l&apos;organisation
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-lime-900/40 text-lime-300">
                    Polyvalence
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/40 text-indigo-300">
                    Gestion du temps
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience 1 */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
            {/* Point sur la timeline */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 border-4 border-black z-10" />

            {/* Contenu à gauche pour desktop, en haut pour mobile */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0 md:pr-10 md:text-right order-2 md:order-1">
              <div className="p-6 bg-gray-900/60 rounded-lg border border-gray-700 hover:border-blue-500 transition-all shadow-lg backdrop-blur-sm hover:shadow-blue-500/20">
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-blue-900/50 text-blue-300">
                  Octobre 2018 - Avril 2021
                </span>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">
                  Chargée de Clientèle Spécialisée
                </h3>
                <h4 className="text-blue-400 mb-3">
                  La Banque Postale - Châlons-en-Champagne, Marne
                </h4>
                <p className="text-gray-300 text-justify text-sm">
                  Au sein du service d&apos;ouverture à distance, j&apos;ai géré
                  l&apos;ouverture de Livrets A et de Livrets Jeunes issus du
                  parcours mineur, ainsi que le dénouement de Comptes Courants
                  provenant des bureaux de poste pour le service Client.
                  J&apos;ai travaillé en équipe pour atteindre nos objectifs
                  d&apos;ouverture de comptes quotidiens, en utilisant Teams
                  pour la communication inter-services et en étant vigilant dans
                  la détection de faux papiers afin de prévenir la fraude.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/40 text-blue-300">
                    Réactivité
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/40 text-green-300">
                    Rigueur
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-900/40 text-purple-300">
                    Sens de l&apos;organisation
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-lime-900/40 text-lime-300">
                    Gestion du temps
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-900/40 text-indigo-300">
                    Communication écrite
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-900/40 text-orange-300">
                    Prendre des initiatives
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-900/40 text-slate-300">
                    Sens des responsabilité
                  </span>
                </div>
              </div>
            </div>

            {/* Espace vide à droite pour desktop, invisible en mobile */}
            <div className="w-full md:w-5/12 order-1 md:order-2" />
          </div>
        </div>
      </div>
    </>
  );
}
