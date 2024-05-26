import StyledInput from "@/app/_components/Input";
import { Button } from "@/app/_components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-[url('/forum_herobanner.jpeg')]">
      <div className="container px-4 mx-auto py-6 md:py-12 text-white text-center">
        <h1 className="uppercase text-lg md:text-2xl font-semibold mb-4">
          <a
            href="https://www.mycarforum.com/"
            className="underline hover:no-underline"
            target="_blank"
          >
            MYCARFORUM
          </a>{" "}
          IS THE OFFICIAL FORUM OF SGCARMART
        </h1>
        <h2 className="text-sm md:text-base mb-6">
          You may login to both platforms using the same username and password.{" "}
          <a
            href="https://www.mycarforum.com/register/"
            className="underline hover:no-underline"
            target="_blank"
          >
            Sign up
          </a>
        </h2>
        <div className="w-full md:max-w-[550px] mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
            <StyledInput
              className="py-4 sm:rounded-r-none"
              placeholder="Search Forum"
            />
            <Button className="p-4 bg-red-700 sm:rounded-l-none border border-red-700 hover:bg-red-400">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
