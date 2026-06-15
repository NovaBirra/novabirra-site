# NovaBirra — site

Le carnet de brassage & de zythologie de NovaBirra.
Site **statique** construit avec [Astro](https://astro.build). Contenu en Markdown, zéro base de données, hébergement gratuit.

---

## Démarrer en local

Prérequis : [Node.js](https://nodejs.org) 18 ou plus.

```bash
npm install      # installe les dépendances (une seule fois)
npm run dev      # lance le serveur de développement → http://localhost:4321
```

Le site se recharge automatiquement à chaque modification.

```bash
npm run build    # génère le site final dans ./dist
npm run preview  # prévisualise le build de production
```

---

## Structure du projet

```
src/
  styles/global.css        → tokens de marque (couleurs, polices) + base
  layouts/Base.astro       → en-tête, polices, nav + footer, scripts partagés
  components/               → briques réutilisables
    Nav, Footer, Hero, FeatureInteractive, JournalCard,
    ThemeTiles, AproposBand, Newsletter, Icon, RecipeScaler
  content/
    config.ts              → schéma des articles/recettes (frontmatter)
    journal/*.md(x)        → LE CONTENU (un fichier = un article)
  pages/
    index.astro            → page d'accueil
    journal/index.astro    → liste de tous les articles
    journal/[...slug].astro→ gabarit d'article (généré pour chaque fichier)
public/
  quest-ce-que-la-biere.html → la page interactive (servie telle quelle)
  favicon.svg
```

---

## Ajouter un article

Crée un fichier dans `src/content/journal/`. Le nom du fichier devient l'URL
(`mon-article.md` → `/journal/mon-article/`).

### Article de fond (prose simple) — fichier `.md`

```md
---
title: "Mon titre"
dek: "Le chapô qui résume l'article en une phrase."
category: "Fabrication"      # Recette | Fabrication | Styles | Ressources
date: 2026-01-15
readingTime: "6 min"
accent: "fabrication"        # recettes | fabrication | styles | ressources
---

Le texte de l'article en **Markdown** classique.

## Un sous-titre

Un paragraphe, une [lien](https://exemple.be), etc.
```

### Recette (avec fiche technique + ingrédients ajustables) — fichier `.mdx`

Ajoute au frontmatter les blocs `fiche`, `profil` et `ingredients`, puis insère
le composant `<RecipeScaler />` là où tu veux dans le texte :

```mdx
---
title: "Ma Recette"
dek: "..."
category: "Recette"
date: 2026-01-15
accent: "recettes"
fiche:
  style: "India Pale Ale"
  abv: "6,5&nbsp;%"
  ibu: "~55 IBU"
  couleur: "Dorée"
  fermentation: "Haute, ~20&nbsp;&deg;C"
  volumeBase: 20
profil:
  - { label: "Amertume", note: "élevée", value: 80, couleur: "houblon" }
ingredients:
  - { nom: "Malt Pale Ale", base: 4.5, unit: "kg" }
  - { nom: "Houblon Chinook", note: "amérisant", base: 30, unit: "g" }
---
import RecipeScaler from '../../components/RecipeScaler.astro';

Mon intro…

<RecipeScaler ingredients={frontmatter.ingredients} volumeBase={frontmatter.fiche.volumeBase} />

## Le brassage

1. **Empâtage** — …
```

`unit` accepte : `kg`, `g`, `L`, `sachet`. `couleur` (profil) : `houblon`, `malt`, `eau`, `levure`.

Mettre `draft: true` dans le frontmatter masque l'article du site.

---

## Mettre en ligne (gratuit)

Le dossier `dist/` produit par `npm run build` est un site statique pur. Trois options :

- **Netlify** ou **Cloudflare Pages** : connecte le dépôt Git, commande de build `npm run build`, dossier publié `dist`. Déploiement automatique à chaque push.
- **GitHub Pages** : pousse le dépôt, active Pages via une action de build Astro.

Pour brancher un nom de domaine propre (ex. `biere.novabirra.com`), ajoute un
enregistrement DNS pointant vers l'hébergeur choisi.

---

## Migrer le contenu de novabirra.be (WordPress)

1. Dans l'admin WordPress : **Outils → Exporter** → télécharge le fichier XML.
2. Convertis chaque article en Markdown (un outil comme `wordpress-export-to-markdown`
   automatise la tâche), puis dépose les fichiers dans `src/content/journal/`.
3. Complète le frontmatter (category, accent, date) et nettoie le texte.
4. **Conserve les anciennes URL** : si une adresse change, ajoute une redirection
   (fichier `_redirects` pour Netlify/Cloudflare) pour préserver le référencement.
```
# public/_redirects (exemple)
/2020/03/15/holy-ipa   /journal/holy-ipa   301
```

---

*Bossé avec passion dans le Borinage · Boisé avec modération.*
