import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Domaine final : indispensable pour le sitemap et les URL canoniques.
  site: 'https://novabirra.be',

  // ------------------------------------------------------------------
  // INTERNATIONALISATION — FR par défaut (sans préfixe), EN sous /en/.
  // Routage manuel : on crée soi-même les pages dans src/pages/en/.
  // ------------------------------------------------------------------
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [mdx(), sitemap()],

  // ------------------------------------------------------------------
  // REDIRECTIONS — préserver le référencement des anciennes URL WordPress.
  // GitHub Pages ne sait pas faire de vraie 301 ; Astro génère ici, pour
  // chaque entrée, une page de redirection (meta-refresh + lien canonique)
  // que Google suit comme une redirection permanente.
  //
  // Remplace la partie gauche par TES anciennes adresses (voir le README),
  // la partie droite par la nouvelle page. Puis dé-commente le bloc.
  // ------------------------------------------------------------------
  // redirects: {
  //   '/2020/03/15/holy-ipa':                    '/journal/holy-ipa',
  //   '/2019/02/10/re-fermentation-en-bouteilles':'/journal/re-fermentation-en-bouteilles',
  //   '/2015/06/20/white-blossom-saison':        '/journal/white-blossom-saison',
  //   '/2014/06/05/les-styles-de-biere-belge':   '/journal/les-styles-de-biere-belge',
  // },

  // Build statique dans ./dist — déployable sur GitHub Pages.
});
