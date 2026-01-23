import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = blog.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Pablo Gamero • Writing",
    description:
      "Thoughts on building Limero, shipping products, and lessons learned along the way.",
    site: context.site ?? "https://pablogamero.com",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      author: post.data.author,
    })),
    customData: "<language>en-us</language>",
  });
}
