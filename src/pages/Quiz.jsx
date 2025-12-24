import { useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";

// assets
import riotLogo from "../assets/images/icons/riotlogo-white.png";
import bgAscent from "../assets/images/backgrounds/ascent.jpg";

import sova from "../assets/images/heroes/sova.png";
import jett from "../assets/images/heroes/jett.png";

import iconInitiator from "../assets/images/icons/initiator-icon.png";
import iconDuelist from "../assets/images/icons/duelist-icon.png";
import iconController from "../assets/images/icons/controller-icon.png";
import iconSentinel from "../assets/images/icons/sentinel-icon.png";

export default function Quiz({ onExit, onFinish }) {
  const total = QUESTIONS.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isSwitching, setIsSwitching] = useState(false); // animação pergunta

  const current = QUESTIONS[step];

  const progressPct = useMemo(() => {
    return Math.round(((step + 1) / total) * 100);
  }, [step, total]);

  function goNextWithTransition(nextStep) {
    setIsSwitching(true);
    window.setTimeout(() => {
      setStep(nextStep);
      setIsSwitching(false);
    }, 220);
  }

  function finishWithTransition(winner) {
  setIsSwitching(true);

  window.setTimeout(() => {
    onFinish(winner);
  }, 320); // tempo da animação
}

  function handlePick(optionIndex) {
    const nextAnswers = [...answers];
    nextAnswers[step] = optionIndex;
    setAnswers(nextAnswers);

    const isLast = step === total - 1;

    if (!isLast) {
      goNextWithTransition(step + 1);
      return;
    }

    const roleByIndex = ["duelist", "initiator", "controller", "sentinel"];
    const score = { duelist: 0, initiator: 0, controller: 0, sentinel: 0 };

    nextAnswers.forEach((idx) => {
      const role = roleByIndex[idx];
      if (role) score[role] += 1;
    });

    let winner = "duelist";
    if (score.initiator > score[winner]) winner = "initiator";
    if (score.controller > score[winner]) winner = "controller";
    if (score.sentinel > score[winner]) winner = "sentinel";

    finishWithTransition(winner);
  }

  return (
    <main className="min-h-screen text-white bg-black page-enter">
      {/* TOP BAR */}
      <header className="h-14 bg-black/90 border-b border-white/10 flex items-center px-6">
        <div className="flex items-center gap-3">
          <img src={riotLogo} alt="Riot Games" className="h-5 opacity-80" />
          <span className="text-xs tracking-widest text-white/70">VALORANT QUIZ</span>
        </div>

        <button
          className="ml-auto px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition text-xs font-semibold"
          onClick={onExit}
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

      {/* MAIN QUIZ AREA */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgAscent})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-white/10" />

        {/* personagens */}
        <img
          src={sova}
          alt="Sova"
          className="hidden md:block absolute left-0 bottom-0 h-[610px] object-contain pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        />
        <img
          src={jett}
          alt="Jett"
          className="hidden md:block absolute right-35 bottom-0 h-[520px] object-contain pointer-events-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        />

        <div className="relative max-w-5xl mx-auto px-6 py-14 text-center">
          {/* bloco que anima ao trocar pergunta */}
          <div className={isSwitching ? "q-exit" : "q-enter"}>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow">
              {current.title}
            </h2>

            <div className="mt-10 space-y-4 max-w-2xl mx-auto">
              {current.options.map((opt, idx) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handlePick(idx)}
                  className="w-full rounded-full bg-[#FF4655] hover:bg-[#ff2739] transition font-extrabold tracking-wide text-sm md:text-base py-4 px-6 shadow-lg"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* progresso */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative h-14 rounded-xl bg-black/25 border border-white/10 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-red-500 progress-fill"
                style={{ width: `${progressPct}%` }}
              />
              {/* REMOVIDO: bolinha e texto da porcentagem */}
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 opacity-80">
              <img src={iconDuelist} alt="Duelist" className="h-6" />
              <img src={iconController} alt="Controller" className="h-6" />
              <img src={iconSentinel} alt="Sentinel" className="h-6" />
              <img src={iconInitiator} alt="Initiator" className="h-6" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-white/40">
        Projeto pessoal • Valorant Quiz • Em desenvolvimento
      </footer>
    </main>
  );
}