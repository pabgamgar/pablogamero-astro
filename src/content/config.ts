import { z, defineCollection } from "astro:content";

export const WorkItemSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.array(z.string()),
  links: z.record(z.string()),
  type: z.enum(["App", "Website", "SaaS", "Web App", "Business", "Startup"]),
  featured: z.optional(z.boolean()),
});

const workCollection = defineCollection({
  type: "content",
});

export type WorkItem = z.infer<typeof WorkItemSchema>;

export const collections = {
  work: workCollection,
  trabajo: workCollection,
};
