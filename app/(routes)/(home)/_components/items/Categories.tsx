import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";

import React from "react";
import Image from "next/image";
import { popularCategories } from "@/app/_mock/data";

const Categories = () => {
  return (
    <div>
      <div className="bg-gray-400 uppercase mb-4 px-4 py-2 font-semibold animate-slidein opacity-0 [--slidein-delay:1900ms]">
        Popular Categories
      </div>
      <ScrollArea className="w-full rounded-sm">
        <div className="flex space-x-4">
          {popularCategories.map((x, key) => (
            <div
              key={`popular_categories_${x.id}`}
              className="flex gap-2 items-center relative min-w-[160px] lg:flex-1 animate-slidein opacity-0"
              style={
                {
                  "--slidein-delay": `${1900 + key * 50}ms`,
                } as React.CSSProperties
              }
            >
              <a
                href={x.link}
                target="_blank"
                className="absolute inset-0 z-10"
              />
              <div className="relative rounded-full w-[62px] h-[62px]">
                <Image
                  src={x.img}
                  alt={x.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-xs text-gray-600 text-center font-medium truncate">
                {x.name}
              </p>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Categories;
