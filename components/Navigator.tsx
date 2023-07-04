"use client";

import { Chapter } from "@/types/types";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navigator = () => {
  const pathname = usePathname();
  const chapters: Chapter[] = [
    {"english_name": "Home", "korean_name": "홈", "link": "/"},
    {"english_name": "Introduction", "korean_name": "소개", "link": "/introduction"},
    {"english_name": "Guidelines", "korean_name": "가이드라인", "link": "/guidelines"},
    {"english_name": "Iterative", "korean_name": "반복적인", "link": "/iterative"},
    {"english_name": "Summarizing", "korean_name": "요약", "link": "/summarizing"},
    {"english_name": "Inferring", "korean_name": "추론", "link": "/inferring"},
    {"english_name": "Transforming", "korean_name": "변형", "link": "/transforming"},
    {"english_name": "Expanding", "korean_name": "확장", "link": "/expanding"},
    {"english_name": "Chatbot", "korean_name": "챗봇", "link": "/chatbot"},
    {"english_name": "Conclusion", "korean_name": "결론", "link": "/conclusion"}
  ];

  return (
    <div className="absolute md:static bg-[rgb(var(--background-rgb))] w-full md:w-fit min-w-fit h-[calc(100vh-8rem)]">
      {
        chapters &&
        chapters.map((chapter, index) => (
          <Link
            key={index}
            href={chapter.link}
            className={`flex justify-start items-center p-2 md:p-4 w-full h-12 md:h-16 ${(chapter.link === pathname) ? ' bg-black text-white dark:bg-white dark:text-black font-bold' : ''}`}
          >{chapter.english_name}({chapter.korean_name})</Link>
        ))
      }
    </div>
  )
};

export default Navigator;