"use client";

import { useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { auth, db, googleProvider, ADMIN_EMAILS } from "@/lib/firebase";

type Contact = {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
  lu: boolean;
  createdAt: Timestamp | null;
};

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | null>(null);
  const [filter, setFilter] = useState<"tous" | "non-lus">("tous");

  // Écoute l'état de connexion
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  // Écoute les contacts Firestore en temps réel
  useEffect(() => {
    if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) return;
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setContacts(
        snap.docs.map((d) => ({ id: d.id, ...d.data() } as Contact))
      );
    });
    return unsub;
  }, [user]);

  const login = async () => {
    setLoginError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: unknown) {
      const code = (e as { code?: string })?.code ?? "";
      if (code === "auth/popup-blocked") {
        setLoginError("Le popup a été bloqué. Autorisez les popups pour ce site dans votre navigateur.");
      } else if (code === "auth/popup-closed-by-user") {
        // Ignoré — l'utilisateur a fermé la fenêtre
      } else {
        setLoginError(`Erreur de connexion : ${code || String(e)}`);
      }
    }
  };

  const logout = () => signOut(auth);

  const marquerLu = async (id: string) => {
    await updateDoc(doc(db, "contacts", id), { lu: true });
    if (selected?.id === id) setSelected((p) => p ? { ...p, lu: true } : p);
  };

  const supprimer = async (id: string) => {
    if (!confirm("Supprimer cette demande ?")) return;
    await deleteDoc(doc(db, "contacts", id));
    if (selected?.id === id) setSelected(null);
  };

  const formatDate = (ts: Timestamp | null) => {
    if (!ts) return "—";
    return ts.toDate().toLocaleDateString("fr-FR", {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  // Écran de chargement
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="w-8 h-8 border-4 border-[#1B3A6B]/20 border-t-[#1B3A6B] rounded-full animate-spin" />
      </div>
    );
  }

  // Écran de connexion
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm text-center">
          <div className="flex items-center justify-center mx-auto mb-6">
            <img src="/logo.png" alt="Billiekia Concept" className="h-20 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-[#1B3A6B] uppercase mb-2" style={{ fontFamily: "var(--font-bc)" }}>
            Espace Admin
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Billiekia Concept — Accès réservé
          </p>
          {loginError && (
            <p className="text-red-500 text-xs mb-4 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {loginError}
            </p>
          )}
          <button
            onClick={login}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.9C34.2 33.9 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 1.1 8.1 3l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
              <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.2 19.1 13 24 13c3.1 0 6 1.1 8.1 3l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>
              <path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.9 14.3-5l-6.6-5.4C29.6 37 26.9 38 24 38c-5.5 0-10.2-3.1-12-7.5l-7 5.4C8.5 42.1 15.7 46 24 46z"/>
              <path fill="#EA4335" d="M44.5 20H24v8.5h11.9c-.9 2.9-2.8 5.3-5.3 6.9l6.6 5.4C41.7 37.3 45 31.2 45 24c0-1.3-.2-2.7-.5-4z"/>
            </svg>
            Se connecter avec Google
          </button>
        </div>
      </div>
    );
  }

  // Accès refusé
  if (!ADMIN_EMAILS.includes(user.email ?? "")) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm text-center">
          <p className="text-red-500 font-bold mb-4">Accès non autorisé</p>
          <p className="text-gray-500 text-sm mb-6">Ce compte n'a pas accès à l'espace admin.</p>
          <button onClick={logout} className="text-[#E85420] text-sm font-semibold hover:underline">
            Se déconnecter
          </button>
        </div>
      </div>
    );
  }

  // Interface admin
  const filtered = filter === "non-lus" ? contacts.filter((c) => !c.lu) : contacts;
  const nonLusCount = contacts.filter((c) => !c.lu).length;
  const showDetail = selected !== null;

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      {/* Header */}
      <header className="bg-[#1B3A6B] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl uppercase" style={{ fontFamily: "var(--font-bc)" }}>
            Billiekia Concept
          </span>
          <span className="text-blue-300 text-sm">— Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-blue-200 text-sm hidden sm:block">{user.email}</span>
          <button
            onClick={logout}
            className="text-sm bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
          >
            Déconnexion
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Liste */}
        <aside className={`${showDetail ? "hidden sm:flex" : "flex"} w-full sm:w-80 lg:w-96 bg-white border-r border-gray-100 flex-col`}>
          {/* Filtres */}
          <div className="p-4 border-b border-gray-100 flex gap-2">
            <button
              onClick={() => setFilter("tous")}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filter === "tous" ? "bg-[#1B3A6B] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tous ({contacts.length})
            </button>
            <button
              onClick={() => setFilter("non-lus")}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filter === "non-lus" ? "bg-[#E85420] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Non lus {nonLusCount > 0 && `(${nonLusCount})`}
            </button>
          </div>

          {/* Entrées */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <p className="text-center text-gray-400 text-sm py-16">Aucune demande</p>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setSelected(c); if (!c.lu) marquerLu(c.id); }}
                  className={`w-full text-left px-4 py-4 hover:bg-gray-50 transition-colors ${
                    selected?.id === c.id ? "bg-blue-50 border-l-4 border-[#1B3A6B]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-semibold text-sm text-[#1B3A6B] ${!c.lu ? "font-bold" : ""}`}>
                      {c.prenom} {c.nom}
                    </span>
                    {!c.lu && (
                      <span className="w-2 h-2 rounded-full bg-[#E85420] flex-shrink-0" />
                    )}
                  </div>
                  {c.service && (
                    <p className="text-xs text-[#E85420] font-medium mb-1">{c.service}</p>
                  )}
                  <p className="text-xs text-gray-500 truncate">{c.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{formatDate(c.createdAt)}</p>
                </button>
              ))
            )}
          </div>
        </aside>

        {/* Détail */}
        <main className={`flex-1 overflow-y-auto p-4 sm:p-6 ${showDetail ? "block" : "hidden sm:block"}`}>
          {!selected ? (
            <div className="h-full flex items-center justify-center text-gray-400 text-sm">
              Sélectionnez une demande pour la consulter
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              {/* Bouton retour mobile */}
              <button
                onClick={() => setSelected(null)}
                className="sm:hidden flex items-center gap-2 text-[#1B3A6B] text-sm font-semibold mb-4"
              >
                ← Retour à la liste
              </button>
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1B3A6B] uppercase" style={{ fontFamily: "var(--font-bc)" }}>
                      {selected.prenom} {selected.nom}
                    </h2>
                    {selected.service && (
                      <span className="inline-block mt-1 text-xs font-semibold text-[#E85420] uppercase tracking-wide bg-orange-50 px-3 py-1 rounded-full">
                        {selected.service}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => supprimer(selected.id)}
                    className="text-red-400 hover:text-red-600 text-xs font-semibold transition-colors"
                  >
                    Supprimer
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-24 flex-shrink-0">Email</span>
                    <a href={`mailto:${selected.email}`} className="text-[#E85420] hover:underline font-medium">
                      {selected.email}
                    </a>
                  </div>
                  {selected.telephone && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-400 w-24 flex-shrink-0">Téléphone</span>
                      <span className="text-gray-700">{selected.telephone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-24 flex-shrink-0">Date</span>
                    <span className="text-gray-700">{formatDate(selected.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-24 flex-shrink-0">Statut</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selected.lu ? "bg-green-100 text-green-700" : "bg-orange-100 text-[#E85420]"}`}>
                      {selected.lu ? "Lu" : "Non lu"}
                    </span>
                  </div>
                </div>

                <div className="bg-[#F8F9FA] rounded-xl p-5 border-l-4 border-[#E85420]">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Message</p>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`mailto:${selected.email}?subject=Re: Votre demande — Billiekia Concept`}
                    className="flex-1 text-center btn-orange text-sm"
                  >
                    Répondre par email
                  </a>
                  {!selected.lu && (
                    <button
                      onClick={() => marquerLu(selected.id)}
                      className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Marquer comme lu
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
