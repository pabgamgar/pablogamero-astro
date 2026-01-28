---
title: "How do people do folders?"
description: "How do other people structure folders for projects and long-term document storage?"
date: 2026-01-28
tags: ["webapp", "shipping"]
project: "folderssh"
draft: false
---

Have you ever wondered how other people structure their folders? I have – mostly because I keep changing mine and I'm never fully satisfied.

Over the years I've seen dozens of approaches: PARA method from Tiago Forte's Second Brain, folders by objectives, by type of file, deep hierarchies, flat ones... all of them make sense until they don't.

The core problem, at least for me, is that folders are inherently linear. A file usually belongs to more than one context: two projects, a project and an area, reference material and active work. So what do you do? Duplicate the file? Use symlinks? Pick one folder and hope you remember where it is?

I still haven't figured it out, and that's a rant for another day. What I did want, and could solve, is viewing how other people tackle it.

That's why I built a simple gallery where people can share their folder structures, browse others, upvote them, favourite them, and download the ones they like.

## The process

This was very much an MVP-driven project. ChatGPT helped a lot early on defining what the MVP should be, how to present the information, and what _not_ to build yet. Once that was clear, the rest was mostly execution.

I opened my laptop, picked stack and got to working on the basics. First I needed a simple gallery showing the folder structure, a name, and a short description. From there, it evolved to end up with upvoting, favouriting and downloading the structure easily.

I then went to the other side of the coin: uploading a folder structure. This one was a little trickier. It is still a bit clunky. I'm fine with that. That's MVP 101: make it work, publish it, get feedback, iterate.

## The tech behind it

Because this felt like a contained project, I used it as an excuse to try something new. I went with Vite instead of NextJS, my go to for dynamic websites, and honestly, the speed and simplicity were refreshing.

For auth and database I used Supabase, which fit perfectly for an early MVP. The schema is as simple and boring as it gets: one table for folder structures, one for upvotes, one for favourites. That's it.

Fors hosting, of course, I went with Vercel simply because it removes friction, perfect for a v1.

## What now?

It's live. I shared it. Now I'm watching what people do with it.

If it goes nowhere, that's fine. If it turns into a samll collection of genuinely useful folder systems, that's already a win for me.

I'll leave the link here in case you're curious:
https://folders-sh.vercel.app/
