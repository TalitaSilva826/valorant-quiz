import { useEffect, useState } from "react";

import riotLogo from "../assets/images/icons/riotlogo-white.png";
import bgAscent from "../assets/images/backgrounds/ascent.jpg";

import iconInitiator from "../assets/images/icons/initiator-icon.png";
import iconDuelist from "../assets/images/icons/duelist-icon.png";
import iconController from "../assets/images/icons/controller-icon.png";
import iconSentinel from "../assets/images/icons/sentinel-icon.png";

// Heroes
import sage from "../assets/images/heroes/sage.png";
import killjoy from "../assets/images/heroes/killjoy.png";

import reyna from "../assets/images/heroes/reyna.png";
import jett from "../assets/images/heroes/jett.png";

import omen from "../assets/images/heroes/omen.png";
import clove from "../assets/images/heroes/clove.png";

import sova from "../assets/images/heroes/sova.png";
import skye from "../assets/images/heroes/skye.png";

const RESULT_CONFIG = {
  sentinel: {
    label: "SENTINELA",
    subtitle: "Defensivo, estratégico e essencial para o time.",
    icon: iconSentinel,

    leftHero: sage,
    rightHero: killjoy,

    leftWrapClass:
      "hidden md:block absolute left-30 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    leftHeroClass: "h-[550px] object-contain translate-x-0",

    rightWrapClass:
      "hidden md:block absolute right-20 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    rightHeroClass: "h-[510px] object-contain translate-x-0",
  },

  duelist: {
    label: "DUELISTA",
    subtitle: "Agressivo, confiante e sempre na linha de frente.",
    icon: iconDuelist,

    leftHero: reyna,
    rightHero: jett,

    leftWrapClass:
      "hidden md:block absolute left-0 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    leftHeroClass: "h-[620px] object-contain translate-x-0",

    rightWrapClass:
      "hidden md:block absolute right-30 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    rightHeroClass: "h-[530px] object-contain translate-x-0",
  },

  controller: {
    label: "CONTROLADOR",
    subtitle: "Especialista em controle de mapa e ritmo da partida.",
    icon: iconController,

    leftHero: clove,
    rightHero: omen,

    leftWrapClass:
      "hidden md:block absolute left-4 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    leftHeroClass: "h-[600px] object-contain translate-x-0",

    rightWrapClass:
      "hidden md:block absolute right-30 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    rightHeroClass: "h-[530px] object-contain translate-x-0",
  },

  initiator: {
    label: "INICIADOR",
    subtitle: "Abre espaço, coleta informação e lidera o avanço.",
    icon: iconInitiator,

    leftHero: sova,
    rightHero: skye,

    leftWrapClass:
      "hidden md:block absolute left-0 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    leftHeroClass: "h-[620px] object-contain translate-x-0",

    rightWrapClass:
      "hidden md:block absolute right-0 bottom-0 pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]",
    rightHeroClass: "h-[620px] object-contain translate-x-0",
  },
};

export default function Result({ resultKey = "duelist", onRestart }) {
  const cfg = RESULT_CONFIG[resultKey] ?? RESULT_CONFIG.duelist;

  // ✅ estado de entrada (pra animar quando a tela aparece)
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    // deixa o React montar a tela e depois liga a animação
    const t = window.setTimeout(() => setEnter(true), 30);
    return () => window.clearTimeout(t);
  }, [resultKey]);

  // animação geral da página
  const pageAnim = enter
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-2 scale-[0.99]";

  // animação do conteúdo central (texto/ícone)
  const contentAnim = enter
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  // animação dos heróis (entra lateral)
  const leftHeroAnim = enter ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-6";
  const rightHeroAnim = enter ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6";

  return (
    <main className={`min-h-screen text-white bg-black transition-all duration-500 ease-out ${pageAnim}`}>
      {/* TOP BAR */}
      <header className="h-14 bg-black/90 border-b border-white/10 flex items-center px-6">
        <div className="flex items-center gap-3">
          <img src={riotLogo} alt="Riot Games" className="h-5 opacity-80" />
          <span className="text-xs tracking-widest text-white/70">QUIZ DO VALORANT</span>
        </div>

        <button
          className="ml-auto px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition text-xs font-semibold"
          type="button"
        >
          PLAY NOW
        </button>
      </header>

      {/* HERO TOP STRIP */}
      <section className="w-full bg-[#ff4655]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-xs tracking-widest text-white/80">QUIZ</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
            DESCUBRA A SUA CLASSE NO VALORANT
          </h1>
          <p className="mt-3 text-sm text-white/90 max-w-2xl">
            Responda algumas perguntas e descubra qual classe do Valorant é ideal para você iniciar no jogo.
          </p>
        </div>
      </section>

      {/* RESULT AREA */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgAscent})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay “lavado” */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-[#ff4655]/40 to-white/30" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-white/15" />

        {/* hero left */}
        <div className={`${cfg.leftWrapClass} transition-all duration-500 ease-out ${leftHeroAnim}`}>
          {cfg.leftExtra ? (
            <img src={cfg.leftExtra} alt="" className={cfg.leftExtraClass} />
          ) : null}

          <img src={cfg.leftHero} alt="Hero left" className={cfg.leftHeroClass} />
        </div>

        {/* hero right */}
        <div className={`${cfg.rightWrapClass} transition-all duration-500 ease-out ${rightHeroAnim}`}>
          <img src={cfg.rightHero} alt="Hero right" className={cfg.rightHeroClass} />
        </div>

        <div
          className={`relative max-w-5xl mx-auto px-6 py-16 text-center transition-all duration-500 ease-out ${contentAnim}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-black/80 drop-shadow-sm ">
            SEU CAMINHO NO VALORANT
            <br />
            COMEÇA COMO:
          </h2>

          <div className="mt-8">
            <div className="text-5xl md:text-7xl font-extrabold tracking-wide text-white drop-shadow valorant-title-shadow">
              {cfg.label}
            </div>
            <p className="mt-2 text-sm md:text-base text-white/80">{cfg.subtitle}</p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <img src={cfg.icon} alt={cfg.label} className="h-16 md:h-20 opacity-95" />
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-[#FF4655] hover:bg-[#ff2739] transition font-extrabold tracking-wide text-sm shadow-lg"
            >
              JOGUE AGORA
            </button>

            <button
              type="button"
              onClick={onRestart}
              className="px-6 py-3 rounded-full bg-black/40 hover:bg-black/55 transition font-extrabold tracking-wide text-sm border border-white/15"
            >
              VOLTAR AO INÍCIO
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-white/40">
        Projeto pessoal • Valorant Quiz • Em desenvolvimento
      </footer>
    </main>
  );
}
