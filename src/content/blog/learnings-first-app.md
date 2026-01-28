---
title: "Learnings from shipping my first app – Dibs"
description: "Lessons learned from building and launching my first mobile application"
date: 2026-01-10
tags: ["app development", "lessons", "shipping"]
project: "dibs"
draft: false
---

You know when you see videos and even code alongside them and everything seemed so easy from the design to the publishing of a product? I've always learnt by building my own product ideas, and watching a mix of these videos to learn how to code them, **it has taken me 3 years to publish my first app**. Not because it took that long to create one, but because I just kept creating and creating, but never publishing. This is the reason why today I'm glad to write about the first product I've launched, Dibs.

[This](/images/developer-folder.webp) is a photo of all the projects I've started in the past 3 years.

I started 2026 with one idea in mind: **build, share, learn, repeat**. Because if we never share our work, we will never learn to make better work.

So, let's talk about the app.

## Where did the idea come from?

As many developers do, I build things that solve my own problems, however small or silly they may be. So the story is as simple as the following: I found myself forgetting that I had friendly debts with people, or they had them with me. Even my parents borrow some cash from time to time when they needed it and have no time to go to an ATM to get it.

When I started looking for an app that could manage this, nothing I saw really caught my eye. The apps I found were either designed to manage bigger debts like loans and credit card debt, or they looked like they were made in the 2000s and had no features at all other then input the debt.

## What was the process?

After I decided that I'd create the app I couldn't find, I took the design of one of those apps that I started and never published or finished, and started jotting down a [list of things](/images/dibs-list.webp) I wanted the app to have.

Then I did a quick mockup in Figma (I've found that starting to code without a minimal idea of the design is a waste of time) and started coding. It didn't end quite the same as the design but close enough.

![Dibs mockup](/images/dibs-mockup.webp)

Since I had already built a few apps with Flutter, and due to the simplicity of this one, the actual development didn't take that long, just long enough for me to be happy with the result (which of course meant that I'd keep make changes and tweaks for the next 3 weeks after it was supposedly finished). My main hurdle was the reminder notifications, which I had not done before.

To my surprise, the difficult stage was the publishing of the app. I never thought the App Store Review process would be so tedious the first time. They ask for a website, which I had to create, I had to create engaging screenshots and the payments configuration was a labrynth. Of course this meant I sent the app for review 6 times before it got accepted.

For those wondering the main problems I had:

- Having an in-app purchase in the app but not submitting it in App Store Connect
- Small bugs
- Placing a buymeacoffee.com link –which was 100% optional and in settings– which apparently isn't allowed
- In-app purchase button not working on iPad

I ended up removing in-app purchase completely for this app. I'll add it again if I see the app getting a lot of users or for future features I add.

What I’d do differently is shipping the app with just the main feature, share it, and letting the users decide what features I should add. Based on that I would have an easier time deciding how to really monetise the app.

## Conclusions and next steps

It's been a week since the app was published and to my surprise, it has been downloaded 30 times without me advertising it other than a post on LinkedIn.

![App Store Connect Screenshot for Dibs](/images/dibs-appstoreconnect.webp)

Now, this data also shows that although my app catches the attention of a few people and they decide to give it a go, the app has got no retention. Interestingly, this is exactly how the app is meant to be used. People open it when they need it, not habitually.

Apart from little tweaks and changes I've already found using the app myself (this is my perfectionism talking), the next step I'm taking for this app is adding a feature board in its website and letting users add the features they'd want the app to have.

All in all, pretty good start of the year in my opinion!
