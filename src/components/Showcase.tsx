"use client";

import React, { useState, useTransition } from "react";
import { getCollection } from "astro:content";
import type { EnumType } from "typescript";
const portfolio = await getCollection("portfolio");

export default function Showcase(props: any) {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("Favourites");

  function selectTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <div className="absolute left-1/2 top-0 z-10 flex w-fit -translate-x-1/2 -translate-y-1/2 gap-2 rounded-md bg-white/50 p-2 backdrop-blur-[30px]">
        <button
          onClick={() => selectTab("Favourites")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 hover:bg-blue-300 ${tab == "Favourites" && "bg-sky-400 hover:!bg-sky-400"}`}
        >
          Favourites
        </button>
        <button
          onClick={() => selectTab("All")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 hover:bg-blue-300 ${tab == "All" && "bg-sky-400 hover:!bg-sky-400"}`}
        >
          All
        </button>
        <button
          onClick={() => selectTab("Products")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 hover:bg-blue-300 ${tab == "Products" && "bg-sky-400 hover:!bg-sky-400"}`}
        >
          Products
        </button>
        <button
          onClick={() => selectTab("Businesses")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 hover:bg-blue-300 ${tab == "Businesses" && "bg-sky-400 hover:!bg-sky-400"}`}
        >
          Businesses
        </button>
      </div>
      {tab == "Favourites"
        ? props.favourites
        : tab == "All"
          ? props.all
          : tab == "Products"
            ? props.products
            : tab == "Businesses"
              ? props.businesses
              : null}
    </>
  );
}
