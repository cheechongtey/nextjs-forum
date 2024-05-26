import { timeAgo } from "@/app/_utils/general";
import { cn } from "@/app/_utils/styles";
import React from "react";

const DiscussionItem = ({
  title,
  seeMoreLink,
  items,
}: {
  title: string;
  seeMoreLink: string;
  items: {
    id: number;
    title: string;
    type: string;
    url: string;
    cat_type: string;
    desc: string;
    postDateTime: string;
  }[];
}) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <span className="text-lg font-medium text-red-600">{title}</span>
        <a
          href={seeMoreLink}
          target="_blank"
          className="hover:underline text-xs"
        >
          See More
        </a>
      </div>
      <div>
        {items.map((itm, key) => (
          <div
            key={`${itm.title}_${itm.id}`}
            className={cn("p-2.5", [key % 2 === 0 ? "bg-gray-200" : ""])}
          >
            <div className="flex items-center gap-2">
              <div className="text-gray-500 text-[10px] min-w-[70px]">
                {itm.type === "sponsored"
                  ? "Sponsored"
                  : timeAgo(itm.postDateTime)}
              </div>
              <a
                href={itm.url}
                target="_blank"
                className="font-medium text-xs hover:underline text-blue-800 truncate"
              >
                {itm.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionItem;
