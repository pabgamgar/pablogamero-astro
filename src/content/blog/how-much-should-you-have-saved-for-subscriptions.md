---
title: "How much should you have saved for subscriptions?"
description: "Do you actually know how much money should be in your bank account as of today to pay all your subscriptions on time?"
date: 2026-02-09
tags: ["app development", "lessons", "shipping"]
project: "submoney"
draft: true
---

Subscriptions are more and more frequent nowadays, and they can build up to a big chunk of our money. This means that we're dependent on external services and have to pay them on time, or we'll lose our storage, automations, tools, etc.

It is enough work to keep track of all the subscriptions we have, and when each is paid, but also, we need to keep track of our bank account that they're linked to and always have enough money there to let them charge you and not be in negative numbers.

## But, there's already apps that track subscriptions

My answer to this is yes and no. There are apps that can track subscriptions, tell you how much you _waste_ every month or year on them. There's also app you can connect to your bank and they can tell you those hidden recurring payment you may have forgotten about. All this is fine, but in my case, all I wanted is to know how much money my bank account should have at any given time to be able to pay all my subscriptions on time. So I built it.

I developed an app that's as minimal as it can get, with the 3 main features I like from other apps:

- Calendar view of when I'm going to be charged
- Set reminders on the day of payment (and before). This also helps you decide if you want to cancel it before paying again
- View at a glance your yearly waste on each of the subscriptions

Those features, plus a few of my own, resulted in a simple but useful app that I'm now using daily to keep track of my subscriptions and bank account.

## Not all subscriptions are the same

I also noticed that some "subscriptions" (which in reality are recurring payments), aren't equal. There's subcriptions that are paid weekly/monthly/yearly, but there's also subscriptions that don't have an exact day of payment, case in point: Filling up your car. I myself have averaged a cost of 38€/month for gas money but sometimes it's the 3rd of the month, it could be the 15th, maybe I didn't use the car half that month and don't have to fill it up until the next. This is why I also added the possibility to _check as done_ when you paid so that your recurring payment moves along with what really happens: when I pay to fill up my car, I check that payment as done, and the next date is set a month from today.

On the other hand, we have subscriptions that haven't yet started, trials. Trials are something tricky, you always want to remember you have one before it's finished, so that you can choose to continue and pay for it, or cancel before they charge you. For this, I haven't seen any of these major apps have a feature that helps manage this, you have to set a reminder in another app or magically remember just in time.

This is why I also added a way to mark when something is currently in a trial and remind you before it ends, letting you choose between keeping it for you to track, or deleting it because you won't use it.

## Conclusions

While there are many apps mine overlaps with, I still find that every person has their own style of doing things, this is one of the reasons I love to create simple apps that solve my own problems. What I mean to say is, to all builders and creators, don't let the sea of "competitors" turn your back on your ideas, the worst that can happen is you end up with a product that you yourself will use and one less problem to worry about.

Keep building!
