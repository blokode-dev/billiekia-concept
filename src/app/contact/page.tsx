import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contactez-Nous — Bureau d'Études à N'Djamena, Tchad",
  description:
    "Contactez Billiekia Concept, bureau d'études basé à N'Djamena au Tchad, pour vos projets d'ingénierie, d'infrastructure, d'agriculture, d'environnement, d'aménagement territorial, d'hydraulique et d'assainissement. Nous sommes disponibles pour étudier vos besoins et vous proposer des solutions adaptées.",
  alternates: { canonical: "https://billiekia.com/contact" },
};

const infos = [
  {
    icon: "location-pin",
    title: "Adresse",
    lines: ["Av. Lt. Mahmout Abderrahmane Haggar", "Rue de 30 — B.P. 7580", "N'Djamena, Tchad"],
  },
  // Téléphone temporairement masqué — à réactiver avec les nouveaux numéros
  // {
  //   icon: "phone",
  //   title: "Téléphone",
  //   lines: ["(+235) XX XX XX XX"],
  //   isFile: true,
  // },
  {
    icon: "mail",
    title: "Email",
    lines: ["billiekia.concept@gmail.com"],
    isFile: true,
  },
  {
    icon: "clock",
    title: "Horaires",
    lines: ["Lundi – Vendredi : 8h – 18h", "Samedi : 8h – 13h"],
    isFile: true,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-36 overflow-hidden">
        <Image src="/images/bc/bc-31.jpg" alt="Supervision chantier Billiekia Concept" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[#112850]/85" />
        <div className="relative wrapper text-center text-white">
          <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-bw)" }}>
            Parlons de votre projet
          </p>
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
            Contactez-Nous
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour étudier vos besoins et vous
            proposer des solutions adaptées à vos projets d&apos;infrastructure.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-gap page-end bg-white">
        <div className="wrapper">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <p className="text-[#E85420] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-bw)" }}>
                Nos coordonnées
              </p>
              <h2 className="text-3xl font-bold text-[#1B3A6B] uppercase section-title mb-8" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
                Nous sommes là pour vous
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                Que vous ayez un projet d&apos;infrastructure en cours, une question sur nos
                services ou simplement envie d&apos;en savoir plus sur Billiekia Concept,
                n&apos;hésitez pas à nous joindre.
              </p>

              <div className="space-y-8">
                {infos.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                      {info.isFile ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/icons/${info.icon}.svg`}
                          alt=""
                          width={22}
                          height={22}
                          style={{
                            width: 22,
                            height: 22,
                            filter: "invert(38%) sepia(97%) saturate(700%) hue-rotate(347deg) brightness(95%) contrast(95%)",
                          }}
                        />
                      ) : (
                        <Icon name={info.icon} size={22} className="[&_path]:stroke-[#E85420]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1B3A6B] uppercase text-sm mb-1" style={{ fontFamily: "var(--font-bw)" }}>
                        {info.title}
                      </h3>
                      {info.lines.map((line, j) => (
                        <p key={j} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact direct */}
              <div className="mt-10 p-6 bg-[#F8F9FA] rounded-2xl border-l-4 border-[#E85420]">
                <p className="text-xs uppercase tracking-widest text-[#E85420] font-bold mb-2" style={{ fontFamily: "var(--font-bw)" }}>
                  Direction — Contact direct
                </p>
                <p className="font-bold text-[#1B3A6B] text-lg uppercase" style={{ fontFamily: "var(--font-bc)" }}>
                  Billiekia Concept
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#F8F9FA] rounded-2xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-[#1B3A6B] uppercase mb-2" style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}>
                  Envoyez-nous un message
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Décrivez votre projet et nous vous répondrons dans les 24 heures.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
