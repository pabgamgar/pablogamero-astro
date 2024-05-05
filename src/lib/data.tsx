import InstaSVG from "@/icons/instagram.astro";
import XSVG from "@/icons/x.astro";
import GithubSVG from "@/icons/github.astro";
import LinkedInSVG from "@/icons/linkedin.astro";

export const socials = [
    {
        name: "GitHub",
        url: "https://www.github.com",
        icon: <GithubSVG />
    },
    {
        name: "LinkedIn",
        url: "",
        icon: <LinkedInSVG />
    },
    {
        name: "Instagram",
        url: "",
        icon: <InstaSVG />
    },
    {
        name: "X",
        url: "",
        icon: <XSVG />
    }
] as { name: string, url: string, icon: any }[];

export const tools = [
    {
        name: "Akiflow",
        link: "https://akiflow.com",
        icon: "https://akiflow.com/images/favicon/apple-icon-57x57.png"
    },
    {
        name: "Obsidian",
        link: "https://obsidian.md",
        icon: "https://obsidian.md/favicon.ico"
    },
    {
        name: "Notion",
        link: "https://notion.so",
        icon: "https://www.notion.so/front-static/favicon.ico"
    },
    {
        name: "Canary",
        link: "https://canarymail.io",
        icon: "https://canarymail.io/images/canary-logo.png"
    }
] as { name: string, link: string, icon: string }[];