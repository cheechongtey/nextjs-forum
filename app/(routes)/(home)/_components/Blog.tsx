import { ScrollBar, ScrollArea } from "@/app/_components/ui/scroll-area";
import { blogs } from "@/app/_mock/data";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="p-4 border rounded-sm mb-12">
      <div className="flex items-center justify-between pb-2">
        <span className="text-lg font-medium text-red-600">Blog</span>
        <a
          href="https://www.mycarforum.com/blogs/blog/12-myautoblog/"
          target="_blank"
          className="hover:underline text-[10px] text-blue-600"
        >
          Read More Blogs
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((x) => (
          <div className="relative group">
            <a
              href={x.link}
              target="_blank"
              className="absolute inset-0 z-10"
            />
            <div className="relative rounded-sm w-full h-[200px] border bg-black mb-1">
              <Image
                src={x.background}
                alt={x.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-sm"
              />
            </div>
            <p className="text-xs text-gray-600 font-medium truncate group-hover:underline">
              {x.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
