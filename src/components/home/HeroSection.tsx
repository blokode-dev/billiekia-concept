import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

const featureCards = [
  { icon: "compass", title: "Études Techniques", desc: "APS, APD, dimensionnement" },
  { icon: "bar-chart", title: "Faisabilité", desc: "Diagnostic & analyse de données" },
  { icon: "hard-hat", title: "Supervision", desc: "Contrôle & suivi des travaux" },
  { icon: "leaf", title: "Impact EIES", desc: "Environnemental & Social" },
];

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden">
      <Image
        src="/images/bc/bc-32.jpg"
        alt="Projet routier Billiekia Concept"
        fill
        className="object-cover object-center"
        priority

      />
      <div className="absolute inset-0 bg-[#112850]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#112850]/60 via-transparent to-[#E85420]/10" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-[#E85420]/10 blur-3xl" />
      </div>

      <div className="relative w-full pt-24 pb-16 lg:pt-28 lg:pb-16">
        <div className="wrapper grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#E85420] animate-pulse" />
              <span
                className="text-white/90 text-sm uppercase tracking-widest font-medium"
                style={{ fontFamily: "var(--font-bw, Barlow, sans-serif)" }}
              >
                Quality · Performance · Excellency
              </span>
            </div>

            <p
              className="text-[#E85420] text-sm uppercase tracking-widest font-semibold mb-3"
              style={{ fontFamily: "var(--font-bw, Barlow, sans-serif)" }}
            >
              Bureau d&apos;études basé à N&apos;Djamena, Tchad
            </p>

            <h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-5 uppercase"
              style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
            >
              Bureau d'Études
              <br />
              <span className="text-[#E85420]">&amp; Ingénierie</span>
            </h1>

            <p className="text-gray-200 text-base leading-relaxed mb-8 max-w-xl">
              Basé au Tchad, Billiekia Concept accompagne vos projets d&apos;infrastructure,
              d&apos;agriculture, d&apos;environnement, d&apos;aménagement territorial,
              d&apos;hydraulique et d&apos;assainissement, de la conception à la réalisation —
              avec rigueur, expertise et une exigence absolue de qualité.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-orange inline-flex items-center gap-2 group">
                Nos Services
                <Icon
                  name="arrow-right"
                  size={16}
                  className="[&_path]:stroke-white group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link href="/contact" className="btn-navy">
                Prendre Contact
              </Link>
            </div>
          </div>

          {/* Feature cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up delay-200">
            {featureCards.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-default"
              >
                <div className="mb-3">
                  <Icon
                    name={item.icon}
                    size={32}
                    className="text-[#E85420] [&_path]:stroke-[#E85420] [&_circle]:stroke-[#E85420]"
                  />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-1 uppercase"
                  style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
