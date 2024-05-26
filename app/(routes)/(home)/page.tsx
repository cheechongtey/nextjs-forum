import React from "react";
import Banner from "./_components/Banner";
import Discussion from "./_components/discussions";
import Blog from "./_components/Blog";

const Forum = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <Discussion />
        <Blog />
      </div>
    </>
  );
};

export default Forum;
