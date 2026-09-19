/* ══════════════════════════════════════════════════════════════════
   ███  LE SEUL FICHIER À MODIFIER  ███
   Il est lu par index.html, invitation.html et admin.html.
   ══════════════════════════════════════════════════════════════════ */


/* ── 1. L'ADRESSE DE TON APPS SCRIPT ──────────────────────────────
   Déployer ▸ Gérer les déploiements ▸ copier l'URL qui finit par /exec */
const API = "https://script.google.com/macros/s/AKfycbwx0InKKT5qVd_4SK0pp2BeJ_24RtDEme8j4cx3Nkv2T8Fqd4Ppo-BVxQO8Ws0S7u696Q/exec";


/* ── 2. LA PHOTO ──────────────────────────────────────────────────
   Dépose le fichier dans le même dossier et mets son nom ici. */
const PHOTO = "photo.jpg";


/* ── 3. LA JOURNÉE ────────────────────────────────────────────────
   "icone" accepte : "eglise", "fete", "mairie", "table".
   "ville" est la ligne grise sous le lieu — garde-la courte, elle
   doit tenir sur une seule ligne dans une demi-colonne.
   "maps" facultatif : colle un lien Google Maps pour rendre la
   ville cliquable, ou laisse "" pour du texte simple. */
const CEREMONIE = {
  date: "Samedi 21 août 2027",
  etapes: [
    {
      icone:"eglise", heure:"14 h 00", quoi:"Cérémonie religieuse",
      lieu:"Église Saint-Sulpice", ville:"Fougères, France", maps:""
    },
    {
      icone:"fete",   heure:"16 h 00", quoi:"Cocktail et dîner",
      lieu:"Château de la Vieuville", ville:"Le Châtellier, France", maps:""
    }
  ]
};


/* ── 4. LA DATE LIMITE DE RÉPONSE ─────────────────────────────── */
const DATE_LIMITE = "30 juin";
