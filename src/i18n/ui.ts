// =====================================================================
//  Dictionnaire bilingue FR / EN
//  ---------------------------------------------------------------------
//  Pour ajouter une chaîne : l'écrire dans `fr` ET dans `en` avec la même
//  clé. Les composants lisent la bonne langue via useTranslations().
//  Pour ajouter une langue : dupliquer un bloc et l'ajouter à `ui`.
// =====================================================================

export const defaultLang = 'fr';

export const ui = {
  fr: {
    // — Navigation —
    'nav.biere': 'La bière\u00a0?',
    'nav.recettes': 'Recettes',
    'nav.fabrication': 'Fabrication',
    'nav.styles': 'Styles',
    'nav.ressources': 'Ressources',
    'nav.conseil': "Besoin d'un conseil\u00a0?",
    'nav.cta': 'Cours & ateliers ↗',

    // — Hero (accueil) —
    'hero.eyebrow': 'Carnet de brassage & zythologie',
    'hero.title': 'Le savoir-faire derrière chaque <em>gorgée</em>.',
    'hero.sub': "Recettes, styles, techniques et ressources pour brasseurs curieux — et une plongée interactive dans la matière vivante qu'est la bière.",

    // — Pied de page —
    'footer.rights': 'Tous droits réservés',

    // — Bandeau « Demandez au maître brasseur » —
    'ask.eyebrow': 'Une question\u00a0?',
    'ask.title': 'Demandez au maître brasseur',
    'ask.intro': "Emanuele vous répond personnellement. Choisissez un sujet, écrivez votre question\u00a0: elle arrive droit dans sa boîte.",
    'ask.opt.default': '—\u00a0Choisissez un sujet\u00a0—',
    'ask.opt.recette': 'Une recette',
    'ask.opt.fabrication': 'La fabrication',
    'ask.opt.styles': 'Les styles de bière',
    'ask.opt.ressources': 'Les ressources',
    'ask.opt.autre': 'Autre sujet',
    'ask.subj.recette': "J'ai une question sur une recette",
    'ask.subj.fabrication': "J'ai une question sur la fabrication",
    'ask.subj.styles': "J'ai une question sur les styles de bière",
    'ask.subj.ressources': "J'ai une question sur les ressources",
    'ask.subj.autre': "J'ai une question pour le maître brasseur",
    'ask.placeholder': 'Écrivez votre question ici…',
    'ask.send': "J'envoie ma question au maître brasseur",

    // — Article / recette —
    'article.home': 'Accueil',
    'article.readBefore': 'Lecture\u00a0',
    'article.readAfter': '',
    'cat.recettes': 'Recette',
    'cat.fabrication': 'Fabrication',
    'cat.styles': 'Styles',
    'cat.ressources': 'Ressources',
    'fiche.title': 'Fiche technique',
    'fiche.style': 'Style',
    'fiche.abv': 'Alcool',
    'fiche.ibu': 'Amertume',
    'fiche.couleur': 'Couleur',
    'fiche.fermentation': 'Fermentation',
    'fiche.volume': 'Volume',
    'fiche.profil': 'Profil de dégustation',
    'scaler.volume': 'Pour quel volume\u00a0?',
  },

  en: {
    // — Navigation —
    'nav.biere': 'What is beer?',
    'nav.recettes': 'Recipes',
    'nav.fabrication': 'Brewing',
    'nav.styles': 'Styles',
    'nav.ressources': 'Resources',
    'nav.conseil': 'Need advice?',
    'nav.cta': 'Courses & workshops ↗',

    // — Hero (home) —
    'hero.eyebrow': 'Brewing notebook & zythology',
    'hero.title': 'The craft behind every <em>sip</em>.',
    'hero.sub': 'Recipes, styles, techniques and resources for curious brewers — plus an interactive dive into beer as a living material.',

    // — Footer —
    'footer.rights': 'All rights reserved',

    // — "Ask the master brewer" band —
    'ask.eyebrow': 'A question?',
    'ask.title': 'Ask the master brewer',
    'ask.intro': 'Emanuele answers you personally. Pick a topic, write your question — it lands straight in his inbox.',
    'ask.opt.default': '—\u00a0Choose a topic\u00a0—',
    'ask.opt.recette': 'A recipe',
    'ask.opt.fabrication': 'Brewing',
    'ask.opt.styles': 'Beer styles',
    'ask.opt.ressources': 'Resources',
    'ask.opt.autre': 'Another topic',
    'ask.subj.recette': 'I have a question about a recipe',
    'ask.subj.fabrication': 'I have a question about brewing',
    'ask.subj.styles': 'I have a question about beer styles',
    'ask.subj.ressources': 'I have a question about resources',
    'ask.subj.autre': 'I have a question for the master brewer',
    'ask.placeholder': 'Write your question here…',
    'ask.send': 'Send my question to the master brewer',

    // — Article / recipe —
    'article.home': 'Home',
    'article.readBefore': '',
    'article.readAfter': '\u00a0read',
    'cat.recettes': 'Recipe',
    'cat.fabrication': 'Brewing',
    'cat.styles': 'Styles',
    'cat.ressources': 'Resources',
    'fiche.title': 'Technical sheet',
    'fiche.style': 'Style',
    'fiche.abv': 'Alcohol',
    'fiche.ibu': 'Bitterness',
    'fiche.couleur': 'Colour',
    'fiche.fermentation': 'Fermentation',
    'fiche.volume': 'Volume',
    'fiche.profil': 'Tasting profile',
    'scaler.volume': 'For what volume?',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)['fr'];

/** Renvoie une langue valide (repli sur le français). */
export function getLang(locale?: string): Lang {
  return locale && locale in ui ? (locale as Lang) : (defaultLang as Lang);
}

/** Helper de traduction : const t = useTranslations(Astro.currentLocale). */
export function useTranslations(locale?: string) {
  const lang = getLang(locale);
  return function t(key: string): string {
    const dict = ui[lang] as Record<string, string>;
    const def = ui[defaultLang as Lang] as Record<string, string>;
    return dict[key] ?? def[key] ?? key;
  };
}
