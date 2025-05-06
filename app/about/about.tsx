"use client";

import React from "react";
import { FaMapPin, FaGraduationCap, FaHeart } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { IoBusiness } from "react-icons/io5";

import Formations from "./formations";
import Hobbies from "./hobbies";
import Skills from "./skills";

export default function About() {
  const [activeTab, setActiveTab] = React.useState("parcours");

  return (
    <>
      {/* Introduction */}
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-8">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-6 sm:mb-10">
            {/* À propos de moi */}
            <div className="w-full p-4 sm:p-6 md:p-8 rounded-lg">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-center mb-6 sm:mb-10">
                  À propos de moi
                </h2>
                <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-3 sm:gap-6">
                  <div className="flex items-center text-gray-300">
                    <FaMapPin className="mr-3 flex-shrink-0 text-blue-400" />
                    <span>Montpellier, France</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MdWork className="mr-3 flex-shrink-0 text-blue-400" />
                    <span>Recherche d&apos;emploi (CDD, CDI, Intérim)</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <IoBusiness className="mr-3 flex-shrink-0 text-blue-400" />
                    <span className="text-start">
                      Sur site, télétravail partiel, télétravail complet
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-800 mb-4 sm:mb-6 overflow-x-auto pb-1">
              <nav className="flex justify-center min-w-max mx-auto">
                {/* Bouton Parcours */}
                <button
                  className={`py-2 px-3 sm:px-4 border-b-2 font-medium text-xs sm:text-sm flex items-center whitespace-nowrap ${
                    activeTab === "parcours"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                  }`}
                  onClick={() => setActiveTab("parcours")}
                >
                  <FaGraduationCap className="mr-1 sm:mr-2" size={14} />
                  Parcours
                </button>

                {/* Bouton Compétences */}
                <button
                  className={`py-2 px-3 sm:px-4 border-b-2 font-medium text-xs sm:text-sm flex items-center whitespace-nowrap ${
                    activeTab === "competences"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                  }`}
                  onClick={() => setActiveTab("competences")}
                >
                  <GiSkills className="mr-1 sm:mr-2" size={14} />
                  Compétences
                </button>

                {/* Bouton Passions */}
                <button
                  className={`py-2 px-3 sm:px-4 border-b-2 font-medium text-xs sm:text-sm flex items-center whitespace-nowrap ${
                    activeTab === "passions"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                  }`}
                  onClick={() => setActiveTab("passions")}
                >
                  <FaHeart className="mr-1 sm:mr-2" size={14} />
                  Passions & Intérêts
                </button>
              </nav>
            </div>

            {/* Onglets */}
            <div className="mt-4 sm:mt-6">
              {activeTab === "parcours" && <Formations />}
              {activeTab === "competences" && <Skills />}
              {activeTab === "passions" && <Hobbies />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
