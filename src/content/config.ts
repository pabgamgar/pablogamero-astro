import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    link: z.string(),
    logo: z.string(),
    type: z.array(z.string()),
    description: z.array(z.string()),
    sector: z.optional(z.array(z.array(z.string()))),
    technologies: z.optional(z.array(z.string())),
    socialMedia: z.optional(z.array(z.array(z.string()))),
    order: z.optional(z.number()),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
};
