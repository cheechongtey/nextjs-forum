import React from "react";
import SearchInput from "./SearchInput";

const Banner = () => {
  return (
    <div className="w-full bg-[url('/forum_herobanner.jpeg')]">
      <div className="container px-4 mx-auto py-6 md:py-12 text-white text-center">
        <h1 className="animate-slidein opacity-0 [--slidein-delay:0ms] uppercase text-lg md:text-2xl font-semibold mb-4">
          <a
            href="https://www.mycarforum.com/"
            className="underline hover:no-underline"
            target="_blank"
          >
            MYCARFORUM
          </a>{" "}
          IS THE OFFICIAL FORUM OF SGCARMART
        </h1>
        <h2 className="animate-slidein opacity-0 [--slidein-delay:150ms] text-sm md:text-base mb-6">
          You may login to both platforms using the same username and password.{" "}
          <a
            href="https://www.mycarforum.com/register/"
            className="underline hover:no-underline"
            target="_blank"
          >
            Sign up
          </a>
        </h2>
        <div className="animate-slidein opacity-0 [--slidein-delay:300ms] w-full md:max-w-[550px] mx-auto">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Banner;
