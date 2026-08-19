import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Barlow } from "next/font/google";
import "./globals.css";
import PublicLayout from "@/components/PublicLayout";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bc",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-bw",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-it",
  display: "swap",
});

const BASE_URL = "https://billiekia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Billiekia Concept | Bureau d'Études & Ingénierie",
    template: "%s | Billiekia Concept",
  },
  description:
    "Billiekia Concept, bureau d'études basé à N'Djamena au Tchad, spécialisé en ingénierie des infrastructures, agriculture, environnement, aménagement territorial, hydraulique et assainissement. Qualité, Performance, Excellence — nous accompagnons vos projets de la conception à la réalisation au Tchad et en Afrique (Cameroun, Tunisie, Sénégal, Mali, Niger, Togo).",
  keywords: [
    "bureau d'études Tchad",
    "bureau d'études N'Djamena",
    "ingénierie infrastructure Tchad",
    "études techniques Tchad",
    "Billiekia Concept",
    "EIES impact environnemental Tchad",
    "maîtrise d'ouvrage Tchad",
    "supervision travaux Tchad",
    "N'Djamena",
    "Afrique Centrale",
    "APS APD",
    "bureau études ingénierie Tchad",
    "bureau d'études agriculture Tchad",
    "aménagement territorial Tchad",
    "hydraulique et assainissement Tchad",
    "bureau d'études Cameroun",
    "bureau d'études Sénégal",
    "bureau d'études Mali",
    "bureau d'études Niger",
    "bureau d'études Togo",
    "bureau d'études Tunisie",
  ],
  authors: [{ name: "Billiekia Concept" }],
  creator: "Billiekia Concept",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Billiekia Concept",
    title: "Billiekia Concept | Bureau d'Études & Ingénierie",
    description:
      "Cabinet de bureau d'études basé au Tchad, spécialisé en ingénierie des infrastructures, agriculture, environnement, aménagement territorial, hydraulique et assainissement. Quality · Performance · Excellency",
    images: [
      {
        url: "/images/bc/bc-25.jpg",
        width: 1200,
        height: 630,
        alt: "Billiekia Concept — Ingénieurs sur le terrain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billiekia Concept | Bureau d'Études & Ingénierie",
    description:
      "Cabinet de bureau d'études basé à N'Djamena au Tchad, spécialisé en ingénierie des infrastructures, agriculture, environnement, aménagement territorial, hydraulique et assainissement.",
    images: ["/images/bc/bc-25.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://billiekia.com/#organization",
      name: "Billiekia Concept",
      url: "https://billiekia.com",
      logo: "https://billiekia.com/logo.png",
      description:
        "Cabinet de bureau d'études basé à N'Djamena au Tchad, spécialisé en ingénierie des infrastructures, agriculture, environnement, aménagement territorial, hydraulique et assainissement, de la conception à la réalisation.",
      email: "billiekia.concept@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenue Lieutenant Mahmout Abderrahmane Haggar, Rue de 30",
        postalCode: "7580",
        addressLocality: "N'Djamena",
        addressCountry: "TD",
      },
      taxID: "9009559W",
      identifier: "RCCM TD-NDJ-11-2011-B1300002",
      areaServed: [
        { "@type": "Country", name: "Tchad" },
        { "@type": "Country", name: "Cameroun" },
        { "@type": "Country", name: "Tunisie" },
        { "@type": "Country", name: "Sénégal" },
        { "@type": "Country", name: "Mali" },
        { "@type": "Country", name: "Niger" },
        { "@type": "Country", name: "Togo" },
      ],
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://billiekia.com/#localbusiness",
      name: "Billiekia Concept",
      image: "https://billiekia.com/images/bc/bc-25.jpg",
      description:
        "Bureau d'études au Tchad intervenant en ingénierie des infrastructures, agriculture, environnement, aménagement territorial, hydraulique et assainissement.",
      email: "billiekia.concept@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenue Lieutenant Mahmout Abderrahmane Haggar, Rue de 30",
        postalCode: "7580",
        addressLocality: "N'Djamena",
        addressCountry: "TD",
      },
      areaServed: [
        { "@type": "Country", name: "Tchad" },
        { "@type": "Country", name: "Cameroun" },
        { "@type": "Country", name: "Tunisie" },
        { "@type": "Country", name: "Sénégal" },
        { "@type": "Country", name: "Mali" },
        { "@type": "Country", name: "Niger" },
        { "@type": "Country", name: "Togo" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${barlowCondensed.variable} ${barlow.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900 overflow-x-hidden">
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
