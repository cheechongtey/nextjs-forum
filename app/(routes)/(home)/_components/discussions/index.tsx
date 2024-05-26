import React from "react";
import DiscussionItem from "./Discussion";
import Categories from "./Categories";

const items = [
  {
    id: 1,
    title: "All about Consignment Car Sales.",
    desc: "Welcome all",
    type: "sponsored",
    url: "https://www.mycarforum.com/forums/topic/2700429-all-about-consignment-car-sales/",
    cat_type: "car",
    postDateTime: "2024-05-26T07:23:21Z",
  },
  {
    id: 2,
    title:
      "FORCE Big Brake Kit promotional Price. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    type: "sponsored",
    url: "https://www.mycarforum.com/forums/topic/2698037-force-big-brake-kit-promotional-price/",
    cat_type: "car",
    postDateTime: "2024-05-23T14:13:00Z",
  },
  {
    id: 3,
    title: "Singapore Reckless Drivers Part Xvi",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    type: "normal",
    url: "https://www.mycarforum.com/forums/topic/2723495-singapore-reckless-drivers-part-xvi/",
    cat_type: "car",
    postDateTime: "2024-05-26T02:57:21Z",
  },
];

const Discussion = async () => {
  return (
    <div className="py-4 md:py-8">
      <div className="border rounded-sm p-4 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DiscussionItem
            title="Car-related Discussions"
            seeMoreLink="https://www.mycarforum.com/index.php?app=mcfhome&section=latestdiscussions&cat=carrelated"
            items={items}
          />
          <DiscussionItem
            title="Non Car-related Discussions"
            seeMoreLink="https://www.mycarforum.com/index.php?app=mcfhome&section=latestdiscussions&cat=noncarrelated"
            items={items}
          />
        </div>
        <hr className="my-4" />
        <Categories />
      </div>
    </div>
  );
};

export default Discussion;
