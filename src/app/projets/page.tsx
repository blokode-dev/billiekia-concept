import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projets & Réalisations — Infrastructure & Génie Civil au Tchad",
  description:
    "Découvrez les projets et réalisations de Billiekia Concept au Tchad et en Afrique : études d'infrastructure, agriculture, environnement, aménagement territorial, hydraulique, assainissement, supervision de travaux, EIES et bien plus.",
  alternates: { canonical: "https://billiekia.com/projets" },
};

const projects = [
  {
    id: 1,
    img: "/images/bc/bc-32.jpg",
    category: "Routier",
    status: "Terminé",
    title: "Supervision de route nationale",
    location: "Corridor Nord, Tchad",
    year: "2023",
    desc: "Mission de contrôle et supervision des travaux de réhabilitation d'un tronçon de route nationale, garantissant conformité technique, qualité et respect des délais.",
    services: ["Supervision", "Contrôle technique", "Rapports de chantier"],
  },
  {
    id: 2,
    img: "/images/bc/bc-04.jpg",
    category: "Ouvrages d'art",
    status: "Terminé",
    title: "Construction d'un pont — Phase fondations",
    location: "Tchad",
    year: "2023",
    desc: "Étude technique et supervision de la phase fondations d'un pont : pieux forés, semelles, ferraillage et coffrage des colonnes.",
    services: ["APS/APD", "Supervision travaux", "Contrôle qualité"],
  },
  {
    id: 3,
    img: "/images/bc/bc-22.jpg",
    category: "Ouvrages d'art",
    status: "En cours",
    title: "Pont — Colonnes & infrastructure",
    location: "Tchad",
    year: "2024",
    desc: "Suivi de la réalisation des colonnes et de l'infrastructure d'un pont : coffrage métallique, contrôle du béton et réception des travaux.",
    services: ["Supervision", "Contrôle béton", "DAO"],
  },
  {
    id: 4,
    img: "/images/bc/bc-11.jpg",
    category: "Ouvrages d'art",
    status: "Terminé",
    title: "Ferraillage & mise en place d'armatures",
    location: "Tchad",
    year: "2022",
    desc: "Contrôle de la conformité du ferraillage et des armatures pour les semelles de fondation d'un ouvrage d'art.",
    services: ["Contrôle technique", "Ferraillage", "Conformité"],
  },
  {
    id: 5,
    img: "/images/bc/bc-31.jpg",
    category: "Géotechnique",
    status: "En cours",
    title: "Forage de pieux — Fondations profondes",
    location: "Tchad",
    year: "2024",
    desc: "Mission de suivi et de supervision des travaux de forage de pieux pour fondations profondes d'un ouvrage d'infrastructure.",
    services: ["Géotechnique", "Supervision", "Contrôle"],
  },
  {
    id: 6,
    img: "/images/bc/bc-11.jpg",
    category: "Ingénierie",
    status: "Terminé",
    title: "Étude de faisabilité infrastructure",
    location: "N'Djamena, Tchad",
    year: "2022",
    desc: "Étude de faisabilité et conception pour un projet d'infrastructure incluant relevés terrain, analyse des données et rapport technique.",
    services: ["Faisabilité", "Conception APS/APD", "DAO"],
  },
  {
    id: 7,
    img: "/images/bc/bc-35.jpg",
    category: "Géotechnique",
    status: "Terminé",
    title: "Supervision de forage — Pieux sur site",
    location: "Tchad",
    year: "2024",
    desc: "Suivi et supervision sur site d'opérations de forage de pieux : contrôle de la verticalité, des profondeurs et de la conformité géotechnique.",
    services: ["Supervision", "Géotechnique", "Contrôle terrain"],
  },
  {
    id: 8,
    img: "/images/bc/bc-36.jpg",
    category: "Géotechnique",
    status: "Terminé",
    title: "Mobilisation d'équipements de forage",
    location: "Tchad",
    year: "2024",
    desc: "Coordination et supervision de la mobilisation d'une foreuse sur site : planification logistique, inspection des équipements et mise en place opérationnelle.",
    services: ["Géotechnique", "Logistique", "Supervision"],
  },
  {
    id: 9,
    img: "/images/bc/bc-37.jpg",
    category: "Ouvrages d'art",
    status: "En cours",
    title: "Fondations — Colonnes & coffrages métalliques",
    location: "Tchad",
    year: "2025",
    desc: "Supervision de la mise en place des semelles et colonnes avec coffrages métalliques pour les fondations d'un ouvrage d'art.",
    services: ["Supervision", "Contrôle béton", "Coffrages"],
  },
  {
    id: 10,
    img: "/images/bc/bc-38.jpg",
    category: "Ouvrages d'art",
    status: "En cours",
    title: "Bétonnage & élévation des colonnes de pont",
    location: "Tchad",
    year: "2025",
    desc: "Contrôle et supervision du bétonnage des colonnes de pont : mise en place des armatures, coulage du béton et contrôle qualité des travaux.",
    services: ["Supervision", "Contrôle qualité", "Béton armé"],
  },
];

export default function ProjetsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden">
        <Image src="/images/bc/bc-01.jpg" alt="Chantier Billiekia Concept" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[#112850]/80" />
        <div className="relative wrapper text-center text-white">
          <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-bw)" }}>
            Notre portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
            Nos Projets & Réalisations
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Découvrez notre portfolio de projets réalisés au Tchad et dans plusieurs pays
            d&apos;Afrique pour des clients publics et privés, à travers différents secteurs de
            l&apos;infrastructure.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="wrapper grid grid-cols-3 gap-8 text-center">
          {[
            { v: "50+", l: "Projets réalisés" },
            { v: "10+", l: "Années d'expérience" },
            { v: "5", l: "Secteurs d'activité" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-[#1B3A6B]" style={{ fontFamily: "var(--font-bc)" }}>{s.v}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide mt-1" style={{ fontFamily: "var(--font-bw)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-gap bg-[#F8F9FA]">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
                <div className="h-56 relative overflow-hidden group">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112850]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm" style={{ fontFamily: "var(--font-bw)" }}>
                      {p.category}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${p.status === "En cours" ? "bg-[#E85420] text-white" : "bg-green-500 text-white"}`} style={{ fontFamily: "var(--font-bw)" }}>
                      {p.status}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                    <span>📍 {p.location}</span>
                    <span>📅 {p.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3A6B] uppercase mb-3 leading-tight" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.services.map((sv, i) => (
                      <span key={i} className="text-xs bg-[#F8F9FA] text-[#1B3A6B] px-3 py-1 rounded-full border border-gray-200" style={{ fontFamily: "var(--font-bw)" }}>
                        {sv}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-end pt-24 bg-white">
        <div className="wrapper text-center">
          <h2 className="text-4xl font-bold text-[#1B3A6B] uppercase mb-4" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
            Faites partie de nos réalisations
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Confiez-nous votre prochain projet d&apos;infrastructure et rejoignez la liste de nos clients satisfaits.
          </p>
          <Link href="/contact" className="btn-orange">Soumettre un projet</Link>
        </div>
      </section>
    </div>
  );
}
