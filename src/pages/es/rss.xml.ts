import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog_es", ({ data }) => !data.draft);
  const sortedPosts = blog.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Pablo Gamero • Blog",
    description:
      "Reflexiones sobre construir Limero, lanzar productos y lecciones aprendidas en el camino.",
    site: context.site ?? "https://pablogamero.com",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/es/blog/${post.slug}/`,
      categories: post.data.tags || [],
      author: post.data.author,
    })),
    customData: "<language>es-es</language>",
  });
}
