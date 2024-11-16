import { z, defineCollection } from "astro:content";

export const PortfolioItemSchema = z.object({
	name: z.string(),
	link: z.string(),
	logo: z.string(),
	type: z.string(),
	description: z.array(z.string()),
	sector: z.optional(z.array(z.array(z.string()))),
	technologies: z.optional(z.array(z.string())),
	socialMedia: z.optional(z.array(z.array(z.string()))),
	pinned: z.optional(z.boolean()),
	slug: z.string(),
	body: z.string(),
});

const portfolioCollection = defineCollection({
	type: "content",
	schema: PortfolioItemSchema.omit({ slug: true, body: true }),
});

export type PortfolioItem = z.infer<typeof PortfolioItemSchema>;

export const collections = {
	portfolio: portfolioCollection,
};
