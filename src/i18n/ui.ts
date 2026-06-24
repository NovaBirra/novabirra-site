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

    // — Accueil : sections —
    'home.journal': 'Derniers articles',
    'feat.tag': 'Page interactive',
    'feat.title': 'Qu\'est-ce que <em>la bière</em>\u00a0?',
    'feat.text': "De l'eau au verre\u00a0: le procédé étape par étape, le rôle de chaque ingrédient, et la matrice aromatique infinie à manipuler du bout des doigts.",
    'feat.link': "Explorer l'expérience",
    'feat.chips': 'caramel,agrumes,houblon,épices',
    'tiles.eyebrow': 'Explorer par thème',
    'tiles.go': 'Découvrir',
    'tiles.recettes': 'Du grain au verre\u00a0: nos bières détaillées, reproductibles chez soi.',
    'tiles.fabrication': 'Les gestes du brassage\u00a0: densimètre, re-fermentation, jour de brassage.',
    'tiles.styles': 'Lambic, blanche, triple, saison… la richesse du patrimoine brassicole.',
    'tiles.ressources': 'Le glossaire du brassage\u00a0: tout le vocabulaire, des ingrédients à la dégustation.',
    'apropos.eyebrow': "L'esprit NovaBirra",
    'apropos.title': "Le brassage comme un acte d'engagement",
    'apropos.p1': "NovaBirra n'est pas une brasserie au sens habituel du terme. Cette structure brainoise, fondée par Emanuele Corazzini en 2008, repose sur un engagement\u00a0: transmettre la culture de la bière à travers des cours de brassage et des ateliers de zythologie. Ici, on partage sans retenue\u00a0: recettes précises, techniques éprouvées, notes de dégustation et conseils pour celles et ceux qui veulent comprendre ce qu'il y a vraiment dans leur verre.",
    'apropos.p2': "Parce que la bière n'est pas un simple produit\u00a0: c'est un savoir vivant, fait de gestes, de patience et de parti pris. Le transmettre, c'est refuser qu'elle se réduise à une marchandise.",
    'apropos.quote': "Comprendre la bière, c'est déjà protéger notre patrimoine brassicole — et transmettre sa culture, c'est la faire vivre.",
    'apropos.signAlt': "Signature d'Emanuele Corazzini",
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

    // — Home: sections —
    'home.journal': 'Latest articles',
    'feat.tag': 'Interactive page',
    'feat.title': 'What is <em>beer</em>?',
    'feat.text': 'From water to glass: the process step by step, the role of each ingredient, and the infinite aromatic matrix to manipulate at your fingertips.',
    'feat.link': 'Explore the experience',
    'feat.chips': 'caramel,citrus,hops,spices',
    'tiles.eyebrow': 'Explore by theme',
    'tiles.go': 'Discover',
    'tiles.recettes': 'From grain to glass: our beers in detail, reproducible at home.',
    'tiles.fabrication': 'The craft of brewing: hydrometer, bottle conditioning, brew day.',
    'tiles.styles': 'Lambic, witbier, triple, saison… the richness of brewing heritage.',
    'tiles.ressources': 'The brewing glossary: all the vocabulary, from ingredients to tasting.',
    'apropos.eyebrow': 'The NovaBirra spirit',
    'apropos.title': 'Brewing as an act of commitment',
    'apropos.p1': "NovaBirra isn't a brewery in the usual sense of the word. Founded in Braine-l'Alleud by Emanuele Corazzini in 2008, it rests on a single commitment: passing on beer culture through brewing courses and zythology workshops. Here, we share without holding back: precise recipes, proven techniques, tasting notes and advice for those who want to understand what's really in their glass.",
    'apropos.p2': "Because beer isn't just a product: it's living knowledge, made of gestures, patience and conviction. To pass it on is to refuse to let it become a mere commodity.",
    'apropos.quote': "To understand beer is already to protect our brewing heritage — and to pass on its culture is to keep it alive.",
    'apropos.signAlt': "Emanuele Corazzini's signature",
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
