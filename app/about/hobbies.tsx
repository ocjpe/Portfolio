import { FaBook, FaPaw, FaMapPin } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";

export default function Hobbies() {
  return (
    <div className="w-full space-y-6 ">
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-4 rounded-lg border border-purple-900/50 hover:border-purple-500 transition-colors">
        <div className="flex items-center justify-center mb-2">
          <FaBook className="text-purple-400 mr-2" />
          <h3 className="font-semibold text-purple-300">Lecture Fantasy</h3>
        </div>
        <p className="text-gray-300 text-justify">
          J&apos;aime énormément lire des romans fantasy pour m&apos;évader de
          ce monde et pour cultiver mon imagination. Les univers magiques et les
          mondes fantastiques sont une source d&apos;inspiration constante.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg border border-blue-900/50 hover:border-blue-500 transition-colors">
        <div className="flex items-center justify-center mb-2">
          <IoGameController className="text-blue-400 mr-2" />
          <h3 className="font-semibold text-blue-300">Jeux Vidéo</h3>
        </div>
        <p className="text-gray-300 text-justify">
          Je joue beaucoup aux jeux vidéos depuis que je suis petite. C&apos;est
          aussi un moyen pour moi de m&apos;évader dans un autre univers et
          d&apos;explorer des mondes virtuels fascinants.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 p-4 rounded-lg border border-amber-900/50 hover:border-amber-500 transition-colors">
        <div className="flex items-center justify-center mb-2">
          <FaPaw className="text-amber-400 mr-2" />
          <h3 className="font-semibold text-amber-300">Animaux</h3>
        </div>
        <p className="text-gray-300 text-justify">
          J&apos;aime beaucoup les animaux et j&apos;ai toujours vécu avec un
          chien et un chat chez mes parents. Cette expérience m&apos;a appris le
          sens des responsabilités et l&apos;importance de prendre soin des
          autres.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-4 rounded-lg border border-green-900/50 hover:border-green-500 transition-colors">
        <div className="flex items-center justify-center mb-2">
          <FaMapPin className="text-green-400 mr-2" />
          <h3 className="font-semibold text-green-300">Voyages</h3>
        </div>
        <p className="text-gray-300 text-justify">
          J&apos;aime voyager et découvrir de nouvelles cultures. J&apos;ai
          notamment passé trois mois au Pays de Galles dans le cadre de mes
          études, ce qui m&apos;a permis d&apos;améliorer mon anglais et de
          m&apos;immerger dans une culture différente.
        </p>
      </div>
    </div>
  );
}
