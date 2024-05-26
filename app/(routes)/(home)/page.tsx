import React from "react";
import Banner from "./_components/Banner";
import Discussion from "./_components/discussions";

const Forum = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <Discussion />
      </div>
    </>
  );
};

export default Forum;
