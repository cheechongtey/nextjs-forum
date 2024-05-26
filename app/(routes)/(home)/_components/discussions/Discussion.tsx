import { timeAgo } from "@/app/_utils/general";
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
    <div className="p-4 md:p-6 rounded-sm border">
      <div className="flex items-center justify-between border-b pb-4">
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
        {items.map((itm) => (
          <div
            key={`${itm.title}_${itm.id}`}
            className="pt-2 pb-4 border-b last:border-b-0 last:pb-0"
          >
            <div className="flex items-center justify-between">
              <a
                href={itm.url}
                target="_blank"
                className="font-medium text-xs "
              >
                {itm.title}
              </a>
              <div className="text-gray-500 text-xs hidden sm:block">
                {timeAgo(itm.postDateTime)}
              </div>
            </div>
            <p className="text-gray-500 text-xs mb-2 sm:mb-0">{itm.desc}</p>
            <div className="text-gray-500 text-xs sm:hidden">
              {timeAgo(itm.postDateTime)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionItem;
