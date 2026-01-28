import { z, defineCollection } from "astro:content";

export const ProjectItemSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.union([z.string(), z.array(z.string())]),
  summary: z.union([z.string(), z.array(z.string())]).optional(),
  tech: z.array(z.string()).optional(),
  links: z.record(z.string()),
  type: z.enum(["App", "Website", "SaaS", "Web App", "Business", "Startup"]),
  featured: z.optional(z.boolean()),
  active: z.boolean().default(true),
  stage: z.optional(z.enum(["building", "maintaining", "paused", "active"])),
});

export const BlogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()).optional(),
  project: z.string().optional(),
  projects: z.array(z.string()).optional(),
  author: z.string().default("Pablo Gamero"),
  draft: z.boolean().default(false),
});

const projectCollection = defineCollection({
  type: "content",
});

const blogCollection = defineCollection({
  type: "content",
  schema: BlogPostSchema,
});

export type WorkItem = z.infer<typeof ProjectItemSchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;

export const collections = {
  projects: projectCollection,
  proyectos: projectCollection,
  blog: blogCollection,
  blog_es: blogCollection,
};
