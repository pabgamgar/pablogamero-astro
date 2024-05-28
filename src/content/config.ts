import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    link: z.string(),
    logo: z.string(),
    type: z.string(),
    description: z.array(z.string()),
    sector: z.optional(z.array(z.array(z.string()))),
    technologies: z.optional(z.array(z.string())),
    socialMedia: z.optional(z.array(z.array(z.string()))),
    pinned: z.optional(z.boolean()),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
};
