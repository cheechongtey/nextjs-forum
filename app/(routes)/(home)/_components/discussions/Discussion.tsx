import { timeAgo } from "@/app/_utils/general";
import { cn } from "@/app/_utils/styles";
import { ChevronRight } from "lucide-react";
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
      <a
        href={seeMoreLink}
        target="_blank"
        className="sm:text-lg font-semibold text-red-600 uppercase mb-2 flex items-center hover:underline"
      >
        {title}
        <ChevronRight
          className="inline-block p-0"
          spacing={0}
          width="18"
          height="18"
        />
      </a>
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
