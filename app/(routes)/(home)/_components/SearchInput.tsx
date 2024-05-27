"use client";

import React, { useMemo, useState } from "react";
import StyledInput from "@/app/_components/Input";
import { Button } from "@/app/_components/ui/button";

const SearchInput = () => {
  const [input, setInput] = useState<string>("");
  const disabled = useMemo(() => input !== "", [input]);
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
      <StyledInput
        className="py-4 sm:rounded-r-none"
        placeholder="Search Forum"
        onChange={(e) => setInput(e.target.value ?? "")}
      />
      <Button
        asChild
        className="p-4 bg-red-700 sm:rounded-l-none border border-red-700 hover:bg-red-400"
        disabled={disabled}
      >
        <a
          href={`https://www.mycarforum.com/search?q=${input}`}
          target="_blank"
        >
          Search
        </a>
      </Button>
    </div>
  );
};

export default SearchInput;
