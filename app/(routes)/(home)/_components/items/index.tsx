import { items } from "@/app/_mock/data";
import Image from "next/image";
import React from "react";
import Categories from "./Categories";

const Item = () => {
  return (
    <div className="animate-slidein opacity-0 [--slidein-delay:1400ms] p-4 border rounded-sm mb-12">
      <div className="flex items-center justify-between pb-2">
        <span className="text-lg font-semibold text-red-600 uppercase">
          Items For sales
        </span>
        <a
          href="https://www.mycarforum.com/index.php?app=marketplace"
          target="_blank"
          className="hover:underline text-[10px] text-blue-600"
        >
          See more items
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 mb-12">
        {items.map((x, key) => (
          <div
            key={`item_${x.id}`}
            className="animate-slidein opacity-0 relative group"
            style={
              {
                "--slidein-delay": `${1500 + key * 50}ms`,
              } as React.CSSProperties
            }
          >
            <div className="relative border border-gray-400 rounded-sm w-full h-[200px] mb-1 overflow-hidden">
              <a
                href={x.link}
                target="_blank"
                className="absolute inset-0 z-10"
              />
              <Image
                src={x.img}
                alt={x.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-gray-500 text-xs">{x.type}</p>
            <a
              href={x.link}
              target="_blank"
              className="sm:min-h-[40px] text-sm text-blue-600 line-clamp-2 font-semibold group-hover:underline mb-0.5"
            >
              {x.name}
            </a>
            <p className="text-sm text-red-600 font-semibold">
              {x.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
        ))}
      </div>
      <Categories />
    </div>
  );
};

export default Item;
