import React from "react";
import { Input, InputProps } from "./ui/input";
import { cn } from "../_utils/styles";

const StyledInput = (props: InputProps) => {
  return (
    <Input
      {...props}
      className={cn(
        "bg-white text-gray-800 border-transparent focus:!border-transparent focus:!ring-0",
        props.className
      )}
    />
  );
};

export default StyledInput;
