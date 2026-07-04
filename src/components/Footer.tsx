import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import ScrollToTop from "./ScrollToTop";

const services = [
  "Études de faisabilité",
  "Conception technique (APS/APD)",
  "Supervision des travaux",
  "Études d'impact (EIES)",
  "Assistance maîtrise d'ouvrage",
  "Conseil & Expertise",
];

const pages = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Nos Projets" },
  { href: "/contact", label: "Contact" },
];

const interventionZones = [
  { country: "Tchad", note: "Siège social — N'Djamena" },
  { country: "Cameroun", note: "" },
  { country: "Tunisie", note: "" },
  { country: "Sénégal", note: "" },
  { country: "Mali", note: "" },
  { country: "Niger", note: "" },
  { country: "Togo", note: "" },
];

export default function Footer() {
  return (
    <footer className="bg-[#112850] text-white">
      {/* CTA Banner */}
      <div className="bg-[#E85420] py-16 sm:py-20">
        <div className="wrapper text-center">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-5"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez notre équipe d'experts pour une étude personnalisée et un accompagnement sur mesure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#E85420] font-bold uppercase tracking-widest px-10 py-4 rounded hover:bg-orange-50 transition-colors"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Démarrer un projet
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="wrapper py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.png"
            alt="Billiekia Concept"
            width={160}
            height={60}
            className="h-14 w-auto object-contain mb-6"
          />
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Cabinet de bureau d&apos;études basé à N&apos;Djamena, au Tchad. Notre expertise ne se
            limite pas à l&apos;ingénierie des infrastructures : nous intervenons aussi en
            agriculture, environnement, aménagement territorial, hydraulique et assainissement,
            de la conception à la réalisation.
          </p>
          <p
            className="text-[#E85420] font-semibold text-sm uppercase tracking-widest"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Quality · Performance · Excellency
          </p>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Nos Services
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-gray-300 text-sm hover:text-[#E85420] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85420] flex-shrink-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Navigation
          </h4>
          <ul className="space-y-3">
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-gray-300 text-sm hover:text-[#E85420] transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    name="arrow-right"
                    size={12}
                    className="opacity-60 group-hover:opacity-100 transition-opacity [&_path]:stroke-gray-300 group-hover:[&_path]:stroke-[#E85420]"
                  />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Contact
          </h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3 text-gray-300 text-sm">
              <Icon name="location-pin" size={18} className="[&_path]:stroke-[#E85420] mt-0.5 flex-shrink-0" />
              <span>Av. Lt. Mahmout Abderrahmane Haggar<br />Rue de 30 — B.P. 7580<br />N&apos;Djamena, Tchad</span>
            </li>
            {/* Téléphone temporairement masqué — à réactiver avec les nouveaux numéros */}
            {/* <li className="flex items-start gap-3 text-gray-300 text-sm">
              <Image src="/icons/phone.svg" alt="" width={18} height={18} className="flex-shrink-0 invert opacity-80 mt-0.5" />
              <div className="space-y-1">
                <a href="tel:+23500000000" className="hover:text-[#E85420] transition-colors block">(+235) XX XX XX XX</a>
              </div>
            </li> */}
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <Image src="/icons/mail.svg" alt="" width={18} height={18} className="flex-shrink-0 invert opacity-80" />
              <a href="mailto:billiekia.concept@gmail.com" className="hover:text-[#E85420] transition-colors break-all">
                billiekia.concept@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Zones d'intervention & mentions légales */}
      <div className="border-t border-white/10">
        <div className="wrapper py-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Zones d'intervention */}
          <div>
            <h4
              className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
              style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
            >
              Zones d&apos;Intervention
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Basé au Tchad, Billiekia Concept intervient également dans plusieurs pays
              d&apos;Afrique :
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {interventionZones.map((z) => (
                <li key={z.country} className="flex items-start gap-2 text-gray-300 text-sm">
                  <Icon name="location-pin" size={16} className="[&_path]:stroke-[#E85420] mt-0.5 flex-shrink-0" />
                  <span>
                    {z.country}
                    {z.note && <span className="block text-gray-500 text-xs">{z.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h4
              className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
              style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
            >
              Informations Légales
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <span className="text-gray-500 uppercase text-xs tracking-wide block mb-0.5">RCCM</span>
                TD-NDJ-11-2011-B1300002
              </li>
              <li>
                <span className="text-gray-500 uppercase text-xs tracking-wide block mb-0.5">NIF</span>
                9009559W
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Billiekia Concept — Tous droits réservés.</p>
          <p className="text-gray-500">
            Site conçu par{" "}
            <a
              href="https://pascalreal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E85420] hover:text-orange-400 transition-colors font-medium"
            >
              Pascal Real
            </a>
          </p>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
