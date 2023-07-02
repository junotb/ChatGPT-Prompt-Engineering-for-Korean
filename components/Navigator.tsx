"use client";

import { Chapter } from "@/types/types";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navigator = ({
  open
}: {
  open: boolean
}) => {
  const pathname = usePathname();
  const chapters: Chapter[] = [
    {"english_name": "Introduction", "korean_name": "소개", "description": "", "link": "/introduction"},
    {"english_name": "Guidelines", "korean_name": "가이드라인", "description": "", "link": "/guidelines"},
    {"english_name": "Iterative", "korean_name": "반복적인", "description": "", "link": "/iterative"},
    {"english_name": "Summarizing", "korean_name": "요약", "description": "", "link": "/summarizing"},
    {"english_name": "Inferring", "korean_name": "추론", "description": "", "link": "/inferring"},
    {"english_name": "Transforming", "korean_name": "변형", "description": "", "link": "/transforming"},
    {"english_name": "Expanding", "korean_name": "확장", "description": "", "link": "/expanding"},
    {"english_name": "Chatbot", "korean_name": "챗봇", "description": "", "link": "/chatbot"},
    {"english_name": "Conclusion", "korean_name": "결론", "description": "", "link": "/conclusion"}
  ];

  return (
    <>
      <div className={`bg-[rgb(var(--background-rgb))] fixed top-[var(--header-height)] w-full h-[calc(100vh-var(--header-height)-var(--footer-height))] ${(open) ? '' : 'hidden'}`}>
        {
          chapters &&
          chapters.map((chapter, index) => (
            <Link
              key={index}
              href={chapter.link}
              className={"flex justify-start items-center p-4 min-w-[12rem] min-h-[4rem] h-16" + ((chapter.link === pathname) ? ' bg-black text-white dark:bg-white dark:text-black font-bold' : '')}
            >{chapter.english_name}({chapter.korean_name})</Link>
          ))
        }
      </div>
      <div className="hidden h-full w-60 sm:block">
        {
          chapters &&
          chapters.map((chapter, index) => (
            <Link
              key={index}
              href={chapter.link}
              className={"flex justify-start items-center p-4 min-w-[12rem] min-h-[4rem] h-16" + ((chapter.link === pathname) ? ' bg-black text-white dark:bg-white dark:text-black font-bold' : '')}
            >{chapter.english_name}({chapter.korean_name})</Link>
          ))
        }
      </div>
    </>
  )
};

export default Navigator;