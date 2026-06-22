import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const ProjectItemSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.union([z.string(), z.array(z.string())]),
  summary: z.union([z.string(), z.array(z.string())]).optional(),
  tech: z.array(z.string()).optional(),
  links: z.record(z.string(), z.string()),
  type: z.enum(["App", "Website", "SaaS", "Web App", "Business", "Startup"]),
  featured: z.optional(z.boolean()),
  active: z.boolean().default(true),
  stage: z.optional(z.enum(["building", "maintaining", "paused", "active"])),
});

export const BlogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  translationKey: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  project: z.string().optional(),
  projects: z.array(z.string()).optional(),
  author: z.string().default("Pablo Gamero"),
  draft: z.boolean().default(false),
});

const projectsCollection = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: ProjectItemSchema,
});

const proyectosCollection = defineCollection({
  loader: glob({
    base: "./src/content/proyectos",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: ProjectItemSchema,
});

const blogCollection = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: BlogPostSchema,
});

const blogEsCollection = defineCollection({
  loader: glob({
    base: "./src/content/blog_es",
    pattern: "**/*.{md,mdx}",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: BlogPostSchema,
});

export type WorkItem = z.infer<typeof ProjectItemSchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;

export const collections = {
  projects: projectsCollection,
  proyectos: proyectosCollection,
  blog: blogCollection,
  blog_es: blogEsCollection,
};
