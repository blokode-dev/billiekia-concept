import Link from "next/link";
import Icon from "@/components/Icon";

const services = [
  { icon: "search-chart", title: "Études de Faisabilité", desc: "Diagnostics techniques, études préliminaires et analyse des contraintes et opportunités pour sécuriser vos décisions d'investissement.", href: "/services#faisabilite" },
  { icon: "data-points", title: "Collecte & Analyse de Données", desc: "Collecte et traitement des données techniques, économiques et géographiques nécessaires à la compréhension des enjeux de vos projets.", href: "/services#donnees" },
  { icon: "compass", title: "Conception Technique", desc: "Études APS, APD, dimensionnement technique et solutions d'ingénierie adaptées à vos besoins et à votre contexte.", href: "/services#conception" },
  { icon: "clipboard-check", title: "Assistance Maîtrise d'Ouvrage", desc: "Élaboration des dossiers techniques : cahiers des charges, CCTP, DAO, estimations financières et documents contractuels.", href: "/services#amo" },
  { icon: "hard-hat", title: "Contrôle & Supervision", desc: "Missions de contrôle, supervision et suivi des travaux pour garantir conformité technique, qualité et respect des délais.", href: "/services#supervision" },
  { icon: "leaf", title: "Études d'Impact (EIES)", desc: "Réalisation des Études d'Impact Environnemental et Social (EIES) et plans de gestion environnementale conformes à la réglementation.", href: "/services#eies" },
];

export default function ServicesOverview() {
  return (
    <section className="section-gap bg-white">
      <div className="wrapper">
        <div className="text-center mb-20">
          <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-bw)" }}>
            Ce que nous faisons
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A6B] uppercase section-title-center" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
            Nos Domaines d'Expertise
          </h2>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed text-base">
            Basé au Tchad, notre bureau d'études couvre l'ensemble du cycle de préparation, conception et suivi des projets dans les domaines des infrastructures, de l'agriculture, de l'environnement, de l'aménagement territorial, de l'hydraulique et de l'assainissement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 md:p-10 card-hover shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-[#1B3A6B]/5 flex items-center justify-center mb-6 group-hover:bg-[#E85420]/10 transition-colors flex-shrink-0">
                <Icon name={s.icon} size={28} className="text-[#1B3A6B] group-hover:text-[#E85420] [&_path]:stroke-[#1B3A6B] [&_rect]:stroke-[#1B3A6B] [&_circle]:stroke-[#1B3A6B] group-hover:[&_path]:stroke-[#E85420] group-hover:[&_rect]:stroke-[#E85420] group-hover:[&_circle]:stroke-[#E85420] transition-all" />
              </div>
              <h3 className="text-xl font-bold text-[#1B3A6B] uppercase mb-4" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <Link href={s.href} className="inline-flex items-center gap-2 text-[#E85420] font-semibold text-sm group-hover:gap-3 transition-all mt-auto" style={{ fontFamily: "var(--font-bw)" }}>
                En savoir plus
                <Icon name="arrow-right" size={14} className="[&_path]:stroke-[#E85420]" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services" className="btn-orange">Voir tous nos services</Link>
        </div>
      </div>
    </section>
  );
}
