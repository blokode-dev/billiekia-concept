"use client";

import { useState, useRef } from "react";
import Icon from "./Icon";

// Clé publique Web3Forms — remplacer par la vraie clé après vérification de l'email
// Étapes : aller sur https://web3forms.com → entrer billiekia.concept@gmail.com → le client clique "Confirm" dans l'email → copier la clé ici
const WEB3FORMS_KEY = "VOTRE_CLE_WEB3FORMS_ICI";

const services = [
  "Études de faisabilité",
  "Conception technique (APS/APD)",
  "Assistance maîtrise d'ouvrage",
  "Supervision des travaux",
  "Études d'impact (EIES)",
  "Conseil & Expertise",
  "Autre",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all";

const labelClass =
  "block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const submitTime = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-bot
    if (data.get("website")) return;

    // Anti-spam temporel : soumission trop rapide (< 3s) → bot
    if (Date.now() - submitTime.current < 3000) {
      setError("Veuillez patienter un instant avant d'envoyer.");
      return;
    }

    // Validation email
    const email = (data.get("email") as string) || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Adresse email invalide.");
      return;
    }

    // Longueur minimale du message
    const message = (data.get("message") as string) || "";
    if (message.trim().length < 20) {
      setError("Veuillez décrire votre projet en au moins 20 caractères.");
      return;
    }

    const prenom = (data.get("prenom") as string) || "";
    const nom = (data.get("nom") as string) || "";
    const telephone = (data.get("telephone") as string) || "";
    const service = (data.get("service") as string) || "";

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          // Sujet de l'email reçu
          subject: `[Billiekia] Demande de ${prenom} ${nom}${service ? ` — ${service}` : ""}`,
          // Destinataire pour le message de confirmation (optionnel)
          from_name: `${prenom} ${nom}`,
          email,
          // Champs du formulaire
          "Prénom": prenom,
          "Nom": nom,
          "Email": email,
          "Téléphone": telephone || "—",
          "Service": service || "—",
          "Message": message,
          // Redirection après succès (optionnel — on gère nous-mêmes)
          redirect: "false",
          // Désactiver l'email de confirmation automatique au visiteur
          botcheck: "",
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSent(true);
        form.reset();
      } else {
        setError("Une erreur est survenue. Veuillez réessayer ou nous contacter par email.");
      }
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <Icon name="check-circle" size={36} className="[&_path]:fill-green-500 [&_path]:stroke-none" />
        </div>
        <h4 className="text-2xl font-bold text-[#1B3A6B] uppercase" style={{ fontFamily: "var(--font-bc)" }}>
          Message envoyé !
        </h4>
        <p className="text-gray-600 max-w-sm">
          Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
        </p>
        <button
          onClick={() => { setSent(false); submitTime.current = Date.now(); }}
          className="text-[#E85420] text-sm font-semibold hover:underline mt-2"
          style={{ fontFamily: "var(--font-bw)" }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — invisible aux humains, piège les bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-bw)" }}>Prénom *</label>
          <input type="text" name="prenom" required placeholder="Jean" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} style={{ fontFamily: "var(--font-bw)" }}>Nom *</label>
          <input type="text" name="nom" required placeholder="Dupont" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-bw)" }}>Email *</label>
        <input type="email" name="email" required placeholder="jean.dupont@exemple.com" className={inputClass} />
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-bw)" }}>Téléphone</label>
        <input
          type="tel"
          name="telephone"
          placeholder="(+235) 00 00 00 00"
          pattern="[\+\d\s\-\(\)]{7,20}"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-bw)" }}>Service concerné</label>
        <select name="service" className={inputClass}>
          <option value="">Choisir un service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-bw)" }}>Description du projet *</label>
        <textarea
          name="message"
          required
          minLength={20}
          rows={5}
          placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-orange flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Icon name="send" size={16} className="[&_path]:fill-white [&_path]:stroke-none" />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}
