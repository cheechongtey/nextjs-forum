import React from "react";
import DiscussionItem from "./Discussion";
import Categories from "./Categories";
import { carItems, nonCarItems } from "@/app/_mock/data";

const Discussion = async () => {
  return (
    <div className="py-4 md:py-8">
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] border rounded-sm p-4 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DiscussionItem
            title="Car-related Discussions"
            seeMoreLink="https://www.mycarforum.com/index.php?app=mcfhome&section=latestdiscussions&cat=carrelated"
            items={carItems}
            className="animate-slidein opacity-0 [--slidein-delay:500ms]"
          />
          <DiscussionItem
            title="Non Car-related Discussions"
            seeMoreLink="https://www.mycarforum.com/index.php?app=mcfhome&section=latestdiscussions&cat=noncarrelated"
            items={nonCarItems}
            className="animate-slidein opacity-0 [--slidein-delay:550ms]"
          />
        </div>
        <hr className="my-4" />
        <Categories />
      </div>
    </div>
  );
};

export default Discussion;
