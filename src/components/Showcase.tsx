"use client";

import React, { useState, useTransition } from "react";
import { getCollection } from "astro:content";
import type { EnumType } from "typescript";
const portfolio = await getCollection("portfolio");

export default function Showcase(props: any) {

  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('Favourites');

  function selectTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <div className="flex gap-2 w-fit bg-white/50 rounded-md p-2 backdrop-blur-[30px] top-0 -translate-y-1/2 absolute z-10 left-1/2 -translate-x-1/2">
        <button onClick={() => selectTab("Favourites")} className={`py-0.5 px-2 rounded-md hover:bg-blue-300 transition-all duration-500 ${tab == "Favourites" && "bg-sky-400 hover:!bg-sky-400"}`}>Favourites</button>
        <button onClick={() => selectTab("All")} className={`py-0.5 px-2 rounded-md hover:bg-blue-300 transition-all duration-500 ${tab == "All" && "bg-sky-400 hover:!bg-sky-400"}`}>All</button>
        <button onClick={() => selectTab("Products")} className={`py-0.5 px-2 rounded-md hover:bg-blue-300 transition-all duration-500 ${tab == "Products" && "bg-sky-400 hover:!bg-sky-400"}`}>Products</button>
        <button onClick={() => selectTab("Businesses")} className={`py-0.5 px-2 rounded-md hover:bg-blue-300 transition-all duration-500 ${tab == "Businesses" && "bg-sky-400 hover:!bg-sky-400"}`}>Businesses</button>
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