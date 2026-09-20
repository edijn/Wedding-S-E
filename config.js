/* ══════════════════════════════════════════════════════════════════
   ███  LE SEUL FICHIER À MODIFIER  ███
   Lu par index.html, invitation.html et admin.html.

   La langue de chaque foyer vient du Google Sheet (colonne Langue).
   Ce fichier contient donc chaque texte en deux versions, fr et en.
   ══════════════════════════════════════════════════════════════════ */


/* ── 1. L'ADRESSE DE TON APPS SCRIPT ──────────────────────────────
   Déployer ▸ Gérer les déploiements ▸ copier l'URL qui finit par /exec
   ⚠ Ne laisse pas cette ligne vide sur GitHub, sinon rien ne marche. */
const API = "https://script.google.com/macros/s/AKfycbzQ-Q3RnZq2bnBXZhfGqSUjSTFGYXQNH0QJXgTeoOBe4RgYVYZAmJJ3m1hGFPLGxKqUlQ/exec";


/* ── 2. LA PHOTO ──────────────────────────────────────────────────
   Dépose le fichier dans le même dossier et mets son nom ici. */
const PHOTO = "photo.jpg";


/* ── 3. LANGUE PAR DÉFAUT ─────────────────────────────────────────
   Utilisée avant que le code soit saisi, et pour tout foyer dont la
   colonne Langue est vide. On peut forcer l'autre langue en ajoutant
   ?lang=en à l'adresse — pratique pour vérifier une page. */
const LANGUE_DEFAUT = "fr";


/* ── 4. LE PROGRAMME ──────────────────────────────────────────────
   Une entrée par journée. "icone" accepte : eglise, fete, tasse,
   mairie, table.
   "ville" est la ligne grise sous le lieu : garde-la courte, elle
   doit tenir sur une seule ligne dans une demi-colonne.
   Les noms propres (Château de la Vieuville) ne se traduisent pas :
   les invités doivent les retrouver sur un GPS. */
const PROGRAMME = {
  fr: [
    {
      date: "Samedi 21 août 2027",
      etapes: [
        { icone:"eglise", heure:"14 h 00", quoi:"Cérémonie religieuse",
          lieu:"Église Saint-Sulpice",    ville:"Fougères, France" },
        { icone:"fete",   heure:"16 h 00", quoi:"Cocktail et dîner",
          lieu:"Château de la Vieuville", ville:"Le Châtellier, France" }
      ]
    },
    {
      date: "Dimanche 22 août 2027",
      etapes: [
        { icone:"tasse",  heure:"11 h 00", quoi:"Brunch",
          lieu:"Château de la Vieuville", ville:"Le Châtellier, France" }
      ]
    }
  ],
  en: [
    {
      date: "Saturday 21 August 2027",
      etapes: [
        { icone:"eglise", heure:"2:00 pm",  quoi:"Church ceremony",
          lieu:"Saint-Sulpice Church",    ville:"Fougères, France" },
        { icone:"fete",   heure:"4:00 pm",  quoi:"Cocktail and dinner",
          lieu:"Château de la Vieuville", ville:"Le Châtellier, France" }
      ]
    },
    {
      date: "Sunday 22 August 2027",
      etapes: [
        { icone:"tasse",  heure:"11:00 am", quoi:"Brunch",
          lieu:"Château de la Vieuville", ville:"Le Châtellier, France" }
      ]
    }
  ]
};


/* ── 5. LA DATE LIMITE DE RÉPONSE ─────────────────────────────── */
const DATE_LIMITE = { fr:"30 novembre 2026", en:"30 November 2026" };


/* ══════════════════════════════════════════════════════════════════
   6. TOUS LES TEXTES DE L'INTERFACE

   Les variantes « solo » servent aux foyers d'une seule personne :
   celles-là n'ont pas d'option « une partie d'entre nous », et le
   tutoiement du nombre change la formulation.
   ══════════════════════════════════════════════════════════════════ */
const TEXTES = {
  fr: {
    titre_page:   "Sophie & Edi — 21 août 2027",
    save:         "Save the date",          // jamais traduit
    chargement:   "Un instant…",

    /* page du code */
    code_invite:  "Saisis le code à 4 chiffres qui figure sur ton carton.",
    code_erreur:  "Ce code ne correspond à aucune invitation.",
    code_reseau:  "Connexion impossible. Réessaie dans un instant.",

    /* invitation */
    accroche:     "nous serions très heureux de vous avoir à nos côtés pour célébrer notre mariage.",
    accroche_solo:"nous serions très heureux de t'avoir à nos côtés pour célébrer notre mariage.",
    bouton:       "Répondre à l’invitation",
    bouton_modif: "Modifier notre réponse",
    bouton_modif_solo: "Modifier ma réponse",
    note:         "Merci de nous répondre avant le",

    /* panneau RSVP */
    rep_tous:     "Nous serons tous là",
    rep_partiel:  "Une partie d’entre nous seulement",
    rep_aucun:    "Nous ne pourrons pas venir",
    rep_oui_solo: "Je serai là",
    rep_non_solo: "Je ne pourrai pas venir",

    venue_mariage: "Mariage",
    venue_brunch:  "Mariage + brunch",

    qui:          "Qui sera présent ?",
    mot_label:    "Un mot pour nous (facultatif)",
    mot_exemple:  "Allergie, contrainte horaire, petit mot…",
    envoyer:      "Envoyer notre réponse",
    envoyer_solo: "Envoyer ma réponse",
    envoi_cours:  "Envoi…",
    annuler:      "Annuler",
    fermer:       "Fermer",

    /* confirmations */
    merci_oui:    "Yeahhhhh ! On a hâte !",
    merci_oui_2:  "Nous revenons vers vous très vite avec plus de détails.",
    merci_non:    "C’est noté, merci !",
    merci_non_2:  "Vous nous manquerez",

    err_personne: "Choisis au moins une personne, ou indique que vous ne pourrez pas venir.",
    err_envoi:    "L’envoi a échoué. Réessaie dans un instant."
  },

  en: {
    titre_page:   "Sophie & Edi — 21 August 2027",
    save:         "Save the date",
    chargement:   "One moment…",

    code_invite:  "Enter the 4-digit code printed on your card.",
    code_erreur:  "This code doesn’t match any invitation.",
    code_reseau:  "Couldn’t connect. Please try again in a moment.",

    accroche:     "we would be delighted to have you by our side to celebrate our wedding.",
    accroche_solo:"we would be delighted to have you by our side to celebrate our wedding.",
    bouton:       "Reply to the invitation",
    bouton_modif: "Change our reply",
    bouton_modif_solo: "Change my reply",
    note:         "Please reply by",

    rep_tous:     "We will all be there",
    rep_partiel:  "Only some of us",
    rep_aucun:    "We will not be able to come",
    rep_oui_solo: "I will be there",
    rep_non_solo: "I will not be able to come",

    venue_mariage: "Wedding",
    venue_brunch:  "Wedding + brunch",

    qui:          "Who will be coming?",
    mot_label:    "A word for us (optional)",
    mot_exemple:  "Allergy, timing constraint, a quick note…",
    envoyer:      "Send our reply",
    envoyer_solo: "Send my reply",
    envoi_cours:  "Sending…",
    annuler:      "Cancel",
    fermer:       "Close",

    merci_oui:    "Yeahhhhh! We can’t wait!",
    merci_oui_2:  "We’ll come back to you very soon with more details.",
    merci_non:    "Noted, thank you!",
    merci_non_2:  "We’ll miss you",

    err_personne: "Pick at least one person, or tell us you can’t make it.",
    err_envoi:    "Sending failed. Please try again in a moment."
  }
};
