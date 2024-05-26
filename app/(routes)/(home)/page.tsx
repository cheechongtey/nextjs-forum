import React from "react";
import Banner from "./_components/Banner";
import Discussion from "./_components/discussions";
import Blog from "./_components/Blog";
import Item from "./_components/items";

const Forum = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <Discussion />
        <Blog />
        <Item />
      </div>
    </>
  );
};

export default Forum;
