import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

const advantages = [
  "Expertise pluridisciplinaire couvrant tous les aspects techniques et environnementaux",
  "Équipe de professionnels qualifiés avec des années d'expérience terrain",
  "Approche intégrée de la conception à la supervision des travaux",
  "Connaissance approfondie du contexte local et des réglementations en vigueur",
  "Respect rigoureux des délais et des budgets alloués",
  "Rapports détaillés et documentation technique de haute qualité",
];

const stats = [
  { label: "Projets réalisés", value: "50+" },
  { label: "Années d'expérience", value: "10+" },
  { label: "Experts qualifiés", value: "20+" },
  { label: "Régions couvertes", value: "05" },
];

export default function WhyUs() {
  return (
    <section className="section-gap bg-[#F8F9FA]">
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image side */}
          <div className="relative pb-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="/images/bc/bc-25.jpg" alt="Chantier Billiekia Concept" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112850]/60 via-transparent to-transparent" />
            </div>
            {/* Stats grid */}
            <div className="absolute -bottom-2 left-4 right-4 grid grid-cols-4 gap-2">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-100">
                  <div className="text-xl font-bold text-[#E85420]" style={{ fontFamily: "var(--font-bc)" }}>{s.value}</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide leading-tight mt-1" style={{ fontFamily: "var(--font-bw)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#E85420] rounded-2xl opacity-20" />
          </div>

          {/* Content side */}
          <div>
            <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-bw)" }}>
              Pourquoi nous choisir
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] uppercase section-title mb-8" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
              L'Excellence au cœur de chaque projet
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Basé à N&apos;Djamena, au Tchad, et présent au Cameroun, en Tunisie, au Sénégal, au
              Mali, au Niger et au Togo, Billiekia Concept ne se contente pas de réaliser des
              études — nous bâtissons des partenariats durables avec nos clients, en plaçant la
              qualité et la performance au centre de toutes nos interventions, de l&apos;infrastructure
              à l&apos;agriculture, l&apos;environnement, l&apos;aménagement territorial,
              l&apos;hydraulique et l&apos;assainissement.
            </p>
            <ul className="space-y-5 mb-10">
              {advantages.map((a, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Icon name="check-circle" size={20} className="[&_path]:fill-[#E85420] [&_path]:stroke-none flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
            <Link href="/a-propos" className="btn-orange">Découvrir notre cabinet</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
