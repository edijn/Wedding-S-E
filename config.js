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
   "icone" accepte : "eglise", "chateau", "mairie", "verre", "table".
   "maps" facultatif — laisse "" pour garder l'adresse en texte simple. */
const CEREMONIE = {
  date: "Samedi 3 octobre 2026",
  etapes: [
    {
      icone:"eglise",  heure:"11 h 00", quoi:"Cérémonie religieuse",
      lieu:"Nom de l’église",  adresse:"Adresse de l’église",  maps:""
    },
    {
      icone:"chateau", heure:"14 h 00", quoi:"Cocktail et déjeuner",
      lieu:"Nom du château",   adresse:"Adresse du château",   maps:""
    }
  ]
};


/* ── 4. LA DATE LIMITE DE RÉPONSE ─────────────────────────────── */
const DATE_LIMITE = "28 septembre";
