import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "À Propos — Bureau d'Études & Ingénierie au Tchad",
  description:
    "Découvrez Billiekia Concept, cabinet de bureau d'études basé à N'Djamena, au Tchad, spécialisé en ingénierie des infrastructures, agriculture, environnement, aménagement territorial, hydraulique et assainissement. Notre histoire, nos valeurs et notre équipe.",
  alternates: { canonical: "https://billiekia.com/a-propos" },
};

const values = [
  {
    icon: "target",
    title: "Qualité",
    desc: "Nous maintenons les plus hauts standards de qualité dans chacune de nos prestations, en appliquant des processus rigoureux de contrôle et de validation.",
  },
  {
    icon: "check-circle",
    title: "Performance",
    desc: "L'efficacité et la performance guident nos méthodes de travail, garantissant des résultats optimaux dans les délais et budgets convenus.",
  },
  {
    icon: "eye",
    title: "Excellence",
    desc: "L'excellence est notre signature. Nous cherchons continuellement à dépasser les attentes de nos clients par l'innovation et l'expertise technique.",
  },
];

const orgBottom = [
  { label: "Service Exécution des Travaux", color: "#1B3A6B" },
  { label: "Secrétariat", color: "#2a5298" },
  { label: "Service Comptabilité", color: "#E85420" },
  { label: "Service des Ressources Humaines", color: "#C43A0E" },
];

export default function AProposPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden">
        <Image src="/images/bc/bc-25.jpg" alt="Chantier Billiekia Concept" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[#112850]/80" />
        <div className="relative wrapper text-center text-white">
          <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-bw)" }}>
            Notre identité
          </p>
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
            À Propos de Billiekia Concept
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Basé à N&apos;Djamena, au Tchad, un cabinet d&apos;ingénierie engagé, au service de vos
            projets d&apos;infrastructure, d&apos;agriculture, d&apos;environnement,
            d&apos;aménagement territorial, d&apos;hydraulique et d&apos;assainissement, avec une
            expertise reconnue et une passion pour l&apos;excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-gap bg-white">
        <div className="wrapper grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-bw)" }}>
              Notre histoire
            </p>
            <h2 className="text-4xl font-bold text-[#1B3A6B] uppercase section-title mb-8" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
              Un cabinet né de la passion pour l&apos;ingénierie
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Billiekia Concept est un cabinet de bureau d&apos;études basé à N&apos;Djamena, au
                Tchad, spécialisé dans l&apos;ingénierie des infrastructures. Fondé sur des
                valeurs d&apos;excellence et de rigueur technique, notre cabinet intervient sur
                l&apos;ensemble du cycle de vie des projets, de la conception à la réalisation.
              </p>
              <p>
                Notre expertise ne s&apos;arrête pas à l&apos;ingénierie et aux infrastructures :
                nous intervenons également en agriculture, environnement, aménagement territorial,
                hydraulique et assainissement. Nous couvrons les domaines des études
                préliminaires, de la conception technique (APS/APD), de l&apos;assistance à la
                maîtrise d&apos;ouvrage, du contrôle et suivi des travaux, ainsi que des études
                d&apos;impact environnemental et social (EIES).
              </p>
              <p>
                Notre approche intégrée et notre connaissance approfondie du contexte
                local nous permettent de fournir des solutions adaptées, efficaces et
                durables pour nos clients publics et privés, au Tchad et dans plusieurs pays
                d&apos;Afrique : Cameroun, Tunisie, Sénégal, Mali, Niger et Togo.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="/images/bc/bc-22.jpg" alt="Chantier Billiekia Concept" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112850]/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs border-l-4 border-[#E85420]">
              <blockquote className="text-base font-bold text-[#1B3A6B] uppercase leading-tight" style={{ fontFamily: "var(--font-bc)" }}>
                &ldquo;Transformer la vision en réalité.&rdquo;
              </blockquote>
              <p className="text-gray-500 text-xs mt-2">— Direction Générale</p>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#E85420] rounded-2xl opacity-20" />
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-4 h-64">
          {["/images/bc/bc-13.jpg", "/images/bc/bc-09.jpg", "/images/bc/bc-31.jpg", "/images/bc/bc-32.jpg"].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#112850]/30" />
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-gap bg-[#F8F9FA]">
        <div className="wrapper">
          <div className="text-center mb-16">
            <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-bw)" }}>
              Ce qui nous définit
            </p>
            <h2 className="text-4xl font-bold text-[#1B3A6B] uppercase section-title-center" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
              Nos Valeurs Fondamentales
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 shadow-sm card-hover text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 mb-6">
                  <Icon name={v.icon} size={28} className="[&_path]:stroke-[#E85420] [&_circle]:stroke-[#E85420]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B3A6B] uppercase mb-4" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="section-gap bg-white">
        <div className="wrapper">
          <div className="text-center mb-16">
            <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-bw)" }}>
              Notre structure
            </p>
            <h2 className="text-4xl font-bold text-[#1B3A6B] uppercase section-title-center" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
              Organisation du Cabinet
            </h2>
            <p className="text-gray-600 mt-6 max-w-xl mx-auto">
              Billiekia Concept dispose d&apos;une structure organisationnelle claire et efficace pour assurer la meilleure qualité de service.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-3xl mx-auto">
            <div className="bg-[#1B3A6B] text-white rounded-xl px-12 py-5 text-center shadow-lg min-w-[180px]">
              <p className="text-xs uppercase tracking-widest text-gray-300 mb-1" style={{ fontFamily: "var(--font-bw)" }}>Executive</p>
              <p className="font-bold text-lg uppercase" style={{ fontFamily: "var(--font-bc)" }}>CEO</p>
            </div>
            <div className="w-0.5 h-8 bg-gray-300" />
            <div className="bg-[#1B3A6B] text-white rounded-xl px-12 py-5 text-center shadow-lg min-w-[180px]">
              <p className="text-xs uppercase tracking-widest text-gray-300 mb-1" style={{ fontFamily: "var(--font-bw)" }}>Direction</p>
              <p className="font-bold text-lg uppercase" style={{ fontFamily: "var(--font-bc)" }}>Générale</p>
            </div>
            <div className="w-0.5 h-8 bg-gray-300" />
            <div className="grid grid-cols-2 gap-8 w-full">
              {[{ label: "Direction Technique", sub: "DT" }, { label: "Direction Admin. & Financière", sub: "DAF" }].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gray-300" />
                  <div className="bg-[#2a5298] text-white rounded-xl px-6 py-4 text-center shadow-md w-full">
                    <p className="text-xs text-blue-200 mb-1 uppercase tracking-wide" style={{ fontFamily: "var(--font-bw)" }}>{item.sub}</p>
                    <p className="font-bold text-sm uppercase" style={{ fontFamily: "var(--font-bc)" }}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-0.5 h-8 bg-gray-300" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {orgBottom.map((item, i) => (
                <div key={i} className="rounded-xl px-5 py-5 text-center text-white text-xs font-medium uppercase tracking-wide shadow-sm" style={{ background: item.color, fontFamily: "var(--font-bw)" }}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="page-end pt-24 bg-[#1B3A6B]">
        <div className="wrapper">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="text-white">
              <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-bw)" }}>
                Notre équipe
              </p>
              <h2 className="text-4xl font-bold text-white uppercase mb-6" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
                Des Experts à Votre Service
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Notre cabinet réunit des professionnels qualifiés et expérimentés dans les domaines
                techniques, administratifs et financiers. Chacun apporte une expertise pointue et
                un engagement total pour la réussite de vos projets.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
              <Image src="/images/bc/bc-04.jpg" alt="Chantier Billiekia Concept" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/30 to-transparent" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Executive CEO", dept: "Direction Exécutive" },
              { role: "Directeur Général", dept: "Direction Générale" },
              { role: "Directeur Technique", dept: "Direction Technique" },
              { role: "Directeur Admin. & Financier", dept: "Administration" },
            ].map((m, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-white text-center hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#E85420] flex items-center justify-center mx-auto mb-5">
                  <Icon name="users" size={28} className="text-white [&_path]:stroke-white" />
                </div>
                <p className="font-bold uppercase text-base mb-1" style={{ fontFamily: "var(--font-bc)" }}>{m.role}</p>
                <p className="text-gray-300 text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-bw)" }}>{m.dept}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-orange">Travailler avec nous</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
