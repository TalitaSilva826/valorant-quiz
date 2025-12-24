
// Logos
import riotLogo from "../assets/images/icons/riotlogo-white.png";

// Background
import ascentBg from "../assets/images/backgrounds/ascent.jpg";

// Heroes
import sage from "../assets/images/heroes/sage.png";
import jett from "../assets/images/heroes/jett.png";

// Icons (decorativos / classes)
import iconRadiant from "../assets/images/icons/radiant-icon.png";
import iconController from "../assets/images/icons/controller-icon.png";
import iconDuelist from "../assets/images/icons/duelist-icon.png";
import iconSentinel from "../assets/images/icons/sentinel-icon.png";
import iconInitiator from "../assets/images/icons/initiator-icon.png";

export default function Home({ onStart }) {
  return (
    <main className="min-h-screen bg-black text-white">
        <main className="font-sans"></main>
      {/* TOPO */}
      <header className="h-14 bg-black flex items-center px-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src={riotLogo} alt="Riot Games" className="h-5 opacity-80" />
          <span className="text-xs tracking-widest text-white/70">
            DESCUBRA SUA CLASSE
          </span>
        </div>

        <button className="ml-auto px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition text-xs font-semibold">
          PLAY NOW
        </button>
      </header>

      {/* FAIXA VERMELHA */}
      <section className="bg-[#ff4655] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-xs font-semibold tracking-widest opacity-80">
            QUIZ
          </p>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
            DESCUBRA A SUA CLASSE NO VALORANT
          </h1>

          <p className="mt-3 text-sm md:text-base max-w-2xl opacity-80">
            Responda algumas perguntas e descubra qual classe do Valorant é ideal
            para você iniciar no jogo.
          </p>
        </div>
      </section>

      {/* SEÇÃO PRINCIPAL */}
      <section className="relative min-h-[560px] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ascentBg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Ícones decorativos */}
        <img
          src={iconRadiant}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-24 opacity-20"
          alt=""
        />
      
        {/* Personagens */}
        <img
          src={sage}
          alt="Sage"
          className="hidden md:block absolute left-8 bottom-0 w-[320px]"
        />
        <img
          src={jett}
          alt="Jett"
          className="hidden md:block absolute right-8 bottom-0 w-[320px]"
        />

        {/* Conteúdo central */}
        <div className="relative z-10 flex items-center justify-center min-h-[560px]">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              QUAL A SUA{" "}
              <span className="text-[#ff4655]">CLASSE</span>
            </h2>

            <button
              onClick={onStart}
              className="mt-6 px-10 py-3 rounded-full bg-[#ff4655] hover:bg-red-600 transition font-bold tracking-wide"
            >
              COMEÇAR O QUIZ
            </button>

            <p className="mt-3 text-xs text-white/80 max-w-md mx-auto">
              Essa é uma recomendação para iniciantes. Teste outras classes e
              descubra seu estilo.
            </p>

            {/* Ícones das classes */}
            <div className="mt-8 flex justify-center gap-6 opacity-70">
              <img src={iconDuelist} className="w-8" alt="" />
              <img src={iconController} className="w-8" alt="" />
              <img src={iconSentinel} className="w-8" alt="" />
              <img src={iconInitiator} className="w-8" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-white/40">
        Projeto pessoal • Valorant Quiz
      </footer>
    </main>
  );
}