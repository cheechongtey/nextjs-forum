import { ScrollArea, ScrollBar } from "@/app/_components/ui/scroll-area";
import { discussionCategories } from "@/app/_mock/data";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <ScrollArea className="w-full border rounded-sm">
      <div className="flex space-x-4 p-4">
        {discussionCategories.map((x) => (
          <div className="w-20 flex flex-col gap-2 items-center flex-1 relative">
            <a
              href={x.link}
              target="_blank"
              className="absolute inset-0 z-10"
            />
            <div className="relative rounded-full w-[62px] h-[62px]">
              <Image src={x.img} alt={x.catName} fill />
            </div>
            <p className="text-xs text-gray-600 text-center font-medium truncate">
              {x.catName}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Categories;
