import { defineCollection, z } from 'astro:content';

/* ------------------------------------------------------------
   Collection « journal » : articles et recettes en Markdown.
   Chaque fichier .md vit dans src/content/journal/ et porte
   un frontmatter conforme au schéma ci-dessous.
   Les champs « recette » (fiche, profil, ingredients, steps)
   sont optionnels : un article de fond n'en a pas besoin.
   ------------------------------------------------------------ */
const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),                                  // chapô
    category: z.enum(['Recette', 'Fabrication', 'Styles', 'Ressources']),
    date: z.coerce.date(),
    readingTime: z.string().default('5 min'),
    accent: z.enum(['recettes', 'fabrication', 'styles', 'ressources']).default('recettes'),
    draft: z.boolean().default(false),

    // ---- Bloc recette (optionnel) ----
    fiche: z.object({
      style: z.string(),
      abv: z.string(),
      ibu: z.string().optional(),
      couleur: z.string(),
      fermentation: z.string(),
      volumeBase: z.number().default(20),
    }).optional(),

    profil: z.array(z.object({
      label: z.string(),
      note: z.string(),
      value: z.number(),                              // 0–100
      couleur: z.enum(['houblon', 'malt', 'eau', 'levure']),
    })).optional(),

    ingredients: z.array(z.object({
      nom: z.string(),
      note: z.string().optional(),
      base: z.number(),
      unit: z.enum(['kg', 'g', 'L', 'sachet']),
    })).optional(),
  }),
});

export const collections = { journal };
