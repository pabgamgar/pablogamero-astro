"use client";
import { useState, useTransition } from "react";
import { getCollection } from "astro:content";
const portfolio = await getCollection("portfolio");
const productTypes = ["App", "Website", "Product", "Web App", "SaaS"];
const businessTypes = ["Business", "Startup"];

export default function Showcase() {
  const [tab, setTab] = useState("Favourites");

  function selectTab(nextTab: string) {
    setTab(nextTab);
  }

  return (
    <>
      <div className="fixed left-1/2 top-[80px] z-10 flex w-fit -translate-x-1/2 -translate-y-1/2 gap-2 rounded-md bg-[var(--content)] text-[var(--content-foreground)] p-2 backdrop-blur-[30px]">
        <button
          onClick={() => selectTab("Favourites")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 ${tab == "Favourites" && "bg-sky-400 text-black"}`}
        >
          Favourites
        </button>
        <button
          onClick={() => selectTab("All")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 ${tab == "All" && "bg-sky-400 text-black"}`}
        >
          All
        </button>
        <button
          onClick={() => selectTab("Products")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 ${tab == "Products" && "bg-sky-400 text-black"}`}
        >
          Products
        </button>
        <button
          onClick={() => selectTab("Businesses")}
          className={`rounded-md px-2 py-0.5 transition-all duration-500 ${tab == "Businesses" && "bg-sky-400 text-black"}`}
        >
          Businesses
        </button>
      </div>
      <div className="grid w-full max-w-96 grid-flow-dense grid-cols-1 gap-4 px-6 pt-12 md:max-w-3xl md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3">
        {tab == "Favourites" && <Favourites />}
        {tab == "All" && <All />}
        {tab == "Products" && <Products />}
        {tab == "Businesses" && <Businesses />}
      </div>
    </>
  );
}

const Favourites = () => {
  const items = portfolio.filter((item: any) => item.data.pinned);

  return (
    <>
      {items.map((item: any, index: number) => (
        <div
          key={index}
          className={`content !h-full w-full flex-wrap items-center gap-x-12 gap-y-6 place-self-center text-center ${item.data.type == "App" ? "col-span-1 row-span-3" : "col-span-1 row-span-2"}`}
        >
          <img
            src={`/images/${item.slug}-show.webp`}
            className="md max-h-96 w-fit rounded-md object-contain"
          />
          <div className="flex flex-col gap-2">
            <h3>{item.data.name}</h3>
            <p>{item.data.type}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const All = () => {
  return (
    <>
      {portfolio.map((item: any) => (
        <div
          key={item}
          className={`content !h-full w-full flex-wrap items-center gap-x-12 gap-y-6 place-self-center text-center ${item.data.type == "App" ? "col-span-1 row-span-3" : "col-span-1 row-span-2"}`}
        >
          <img
            src={`/images/${item.slug}-show.webp`}
            className="md max-h-96 w-fit rounded-md object-contain"
          />
          <div className="flex flex-col gap-2">
            <h3>{item.data.name}</h3>
            <p>{item.data.type}</p>
          </div>
        </div>
      ))}
    </>
  );
};
const Products = () => {
  const items = portfolio.filter((item: any) => productTypes.includes(item.data.type));
  return (
    <>
      {items.map((item: any) => (
        <div
          key={item}
          className={`content !h-full w-full flex-wrap items-center gap-x-12 gap-y-6 place-self-center text-center ${item.data.type == "App" ? "col-span-1 row-span-3" : "col-span-1 row-span-2"}`}
        >
          <img
            src={`/images/${item.slug}-show.webp`}
            className="md max-h-96 w-fit rounded-md object-contain"
          />
          <div className="flex flex-col gap-2">
            <h3>{item.data.name}</h3>
            <p>{item.data.type}</p>
          </div>
        </div>
      ))}
    </>
  );
};
const Businesses = () => {
  return (
    <>
      {portfolio
        .filter((item: any) => businessTypes.includes(item.data.type))
        .map((item: any) => (
          <div
            key={item}
            className={`content !h-full w-full flex-wrap items-center gap-x-12 gap-y-6 place-self-center text-center ${item.data.type == "App" ? "col-span-1 row-span-3" : "col-span-1 row-span-2"}`}
          >
            <img
              src={`/images/${item.slug}-show.webp`}
              className="md max-h-96 w-fit rounded-md object-contain"
            />
            <div className="flex flex-col gap-2">
              <h3>{item.data.name}</h3>
              <p>{item.data.type}</p>
            </div>
          </div>
        ))}
    </>
  );
};
