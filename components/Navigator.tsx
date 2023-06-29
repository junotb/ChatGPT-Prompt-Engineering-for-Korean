"use client";

import { Chapter } from "@/types/types";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

const Navigator = () => {
  const pathname = usePathname();
  const chapters: Chapter[] = [
    {"name": "Introduction", "description": "", "link": "/introduction"},
    {"name": "Guidance", "description": "", "link": "/guidance"},
    {"name": "Iterative", "description": "", "link": "/iterative"},
    {"name": "Inferring", "description": "", "link": "/inferring"},
    {"name": "Summarizing", "description": "", "link": "/summarizing"},
    {"name": "Transforming", "description": "", "link": "/transforming"},
    {"name": "Expanding", "description": "", "link": "/expanding"},
    {"name": "Chatbot", "description": "", "link": "/chatbot"},
    {"name": "Conclusion", "description": "", "link": "/conclusion"}
  ];

  return (
    <div className="flex flex-col">
      {
        chapters &&
        chapters.map((chapter, index) => (
          <Link
            key={index}
            href={chapter.link}
            className={"flex justify-center items-center p-4" + ((chapter.link === pathname) ? ' border-2 border-white' : '')}
          >{chapter.name}</Link>
        ))
      }
    </div>
  )
};

export default Navigator;