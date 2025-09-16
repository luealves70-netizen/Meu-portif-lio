import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Music } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Luciano Enrique | Baterista</h1>
        <nav className="space-x-4">
          <a href="#sobre" className="hover:text-red-500">Sobre</a>
          <a href="#videos" className="hover:text-red-500">Vídeos</a>
          <a href="#agenda" className="hover:text-red-500">Agenda</a>
          <a href="#contato" className="hover:text-red-500">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center p-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ritmo, Energia e Criatividade
        </motion.h2>
        <p className="text-gray-400 max-w-xl">
          Sou baterista versátil com experiência em palcos, estúdios e igrejas. Confira meu trabalho!
        </p>
        <a href="#videos">
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white rounded-2xl px-6 py-2">
            Assista meus vídeos
          </button>
        </a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="p-10 md:p-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-red-500">Sobre mim</h3>
        <p className="text-gray-300 max-w-3xl">
          Minha jornada musical começou cedo, explorando diferentes estilos e desenvolvendo um som único.
          Já atuei em igrejas, bandas locais e projetos autorais. Acredito que a bateria é mais que ritmo:
          é expressão e conexão.
        </p>
      </section>

      {/* Vídeos */}
      <section id="videos" className="p-10 md:p-20">
        <h3 className="text-3xl font-bold mb-6 text-red-500">Portfólio em Vídeos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <iframe className="w-full h-56 rounded-2xl" src="https://www.youtube.com/embed/GrV5EwhiD60?si=m87kZyk1ApPkGgsC" title="Vídeo 1" allowFullScreen></iframe>
          <iframe
      className="w-full h-56 rounded-2xl"
      src="https://www.youtube.com/embed/hrqNqUBw_nA39kvk"
      title="Vídeo 2"
      allowFullScreen></iframe>
      <iframe className="w-full h-56 rounded-2xl"
      src="https://www.youtube.com/embed/ER0eZ8pkkEg-XX0d"
      title="Vídeo 2"
      allowFullScreen
    ></iframe>
       </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="p-10 md:p-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-red-500">Agenda</h3>
        <ul className="space-y-4 text-gray-300">
          <li>🎶 15/09 - Culto dos músicos</li>
          <li>🥁 25/09 - Gravação em Estúdio </li>
          <li>🎵 03/10 - Workshop</li>
        </ul>
      </section>

      {/* Contato */}
      <section id="contato" className="p-10 md:p-20 text-center">
        <h3 className="text-3xl font-bold mb-6 text-red-500">Contato</h3>
        <p className="text-gray-300 mb-6">Entre em contato para shows, gravações ou colaborações.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:luealves70@gmail.com"><Mail className="w-8 h-8 hover:text-red-500"/></a>
          <a href="https://instagram.com/luuh_drums" target="_blank"><Instagram className="w-8 h-8 hover:text-red-500"/></a>
            <a href="https://youtube.com/@lucianoenrique286" target="_blank">
  <Youtube className="w-8 h-8 hover:text-red-500"/>
</a>
          <a href="#"><Music className="w-8 h-8 hover:text-red-500"/></a>
        </div>
      </section>

      <footer className="p-6 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Luciano Enrique - Todos os direitos reservados
      </footer>
    </div>
  );
}
