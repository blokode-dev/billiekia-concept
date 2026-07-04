import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Services",
  description: "Découvrez les services de Billiekia Concept, bureau d'études basé au Tchad : études de faisabilité, conception technique APS/APD, supervision des travaux, études d'impact EIES, assistance maîtrise d'ouvrage, agriculture, environnement, aménagement territorial, hydraulique et assainissement.",
};

const services = [
  { id: "faisabilite", img: "/images/bc/bc-11.jpg", tag: "Études préliminaires", title: "Études de Faisabilité & Diagnostics", desc: "Nous réalisons les études préliminaires, diagnostics techniques et études de faisabilité de vos projets afin d'identifier les contraintes et opportunités.", details: ["Études préliminaires et reconnaissance de terrain", "Diagnostics techniques des ouvrages existants", "Études de faisabilité technico-économique", "Identification des contraintes et opportunités", "Rapports d'analyse et recommandations"] },
  { id: "donnees", img: "/images/bc/bc-31.jpg", tag: "Collecte & Analyse", title: "Collecte & Traitement de Données", desc: "Notre bureau collecte et traite les données techniques, économiques et géographiques nécessaires à la compréhension des enjeux des projets d'infrastructure.", details: ["Levés topographiques et géotechniques", "Collecte de données socio-économiques", "Traitement et analyse de données géographiques (SIG)", "Études hydrologiques et hydrauliques", "Rapports de synthèse et cartographies"] },
  { id: "conception", img: "/images/bc/bc-22.jpg", tag: "Ingénierie", title: "Conception Technique (APS / APD)", desc: "Nous concevons et proposons des solutions techniques adaptées : avant-projets sommaires (APS), avant-projets détaillés (APD) et dimensionnement technique.", details: ["Avant-Projet Sommaire (APS)", "Avant-Projet Détaillé (APD)", "Dimensionnement technique des ouvrages", "Plans d'exécution et notes de calcul", "Solutions d'ingénierie innovantes et durables"] },
  { id: "amo", img: "/images/bc/bc-04.jpg", tag: "Assistance MOA", title: "Assistance à la Maîtrise d'Ouvrage", desc: "Nous assistons les maîtres d'ouvrage publics et privés dans l'élaboration de leurs dossiers techniques et contractuels.", details: ["Cahiers des Charges Techniques Particulières (CCTP)", "Dossiers d'Appel d'Offres (DAO)", "Estimations financières détaillées", "Dépouillement et analyse des offres", "Assistance à la négociation et aux contrats"] },
  { id: "supervision", img: "/images/bc/bc-35.jpg", tag: "Contrôle & Suivi", title: "Contrôle & Supervision des Travaux", desc: "Nous assurons les missions de contrôle, supervision et suivi des travaux pour garantir la conformité technique, la qualité et le respect des délais.", details: ["Missions de contrôle technique sur chantier", "Supervision et suivi de l'avancement", "Vérification de la conformité aux plans", "Contrôle qualité des matériaux et ouvrages", "Rapports de chantier et procès-verbaux de réception"] },
  { id: "eies", img: "/images/bc/bc-32.jpg", tag: "Environnement", title: "Études d'Impact Environnemental (EIES)", desc: "Nous réalisons les Études d'Impact Environnemental et Social (EIES) et les plans de gestion environnementale conformément à la réglementation.", details: ["Études d'Impact Environnemental et Social (EIES)", "Plans de Gestion Environnementale et Sociale (PGES)", "Consultation et participation des parties prenantes", "Conformité aux normes nationales et internationales", "Suivi environnemental pendant les travaux"] },
  { id: "conseil", img: "/images/bc/bc-36.jpg", tag: "Expertise", title: "Conseil & Expertise Technique", desc: "Nous fournissons des prestations de conseil, d'expertise technique et d'assistance à la prise de décision pour les projets d'investissement.", details: ["Audits techniques d'ouvrages existants", "Expertise technique indépendante", "Conseil stratégique pour projets d'investissement", "Formation et renforcement de capacités", "Assistance à la rédaction de rapports techniques"] },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-40 overflow-hidden">
        <Image src="/images/bc/bc-25.jpg" alt="Chantier Billiekia Concept" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[#112850]/80" />
        <div className="relative wrapper text-center text-white">
          <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-bw)" }}>Notre offre</p>
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>Nos Services d&apos;Ingénierie</h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Basé au Tchad, notre bureau d&apos;études couvre l&apos;ensemble du cycle de vie de vos
            projets, de la conception à la réception des travaux — au-delà de
            l&apos;infrastructure, dans les domaines de l&apos;agriculture, l&apos;environnement,
            l&apos;aménagement territorial, l&apos;hydraulique et l&apos;assainissement.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-gap bg-white">
        <div className="wrapper">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-16 items-center py-20 ${i < services.length - 1 ? "border-b border-gray-100" : ""}`}>
              {/* Photo side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden" style={{ height: "380px" }}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112850]/70 via-[#112850]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="tag-badge" style={{ fontFamily: "var(--font-bw)" }}>{s.tag}</span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-bold text-[#1B3A6B] uppercase section-title mb-8" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">{s.desc}</p>
                <ul className="space-y-4 mb-10">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E85420] flex-shrink-0 mt-2" />
                      <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#E85420] font-semibold group" style={{ fontFamily: "var(--font-bw)" }}>
                  Demander un devis
                  <Icon name="arrow-right" size={16} className="[&_path]:stroke-[#E85420] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — page-end pour séparer du footer */}
      <section className="page-end pt-24 bg-[#F8F9FA]">
        <div className="wrapper text-center">
          <h2 className="text-4xl font-bold text-[#1B3A6B] uppercase mb-6" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>Vous avez un projet ?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-base leading-relaxed">
            Contactez-nous pour discuter de vos besoins et obtenir une proposition adaptée à votre projet d&apos;infrastructure.
          </p>
          <Link href="/contact" className="btn-orange">Démarrer votre projet</Link>
        </div>
      </section>
    </div>
  );
}
