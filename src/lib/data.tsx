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