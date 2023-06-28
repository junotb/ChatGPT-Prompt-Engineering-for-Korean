"use client";

import { Chapters } from "@/pages/api/chapters.json"
import { Chapter } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const [currentchapter, setCurrentChapter] = useState<Chapter | null>(null);
  useEffect(() => {
    const elements = Chapters.filter((chapter) => chapter.link === pathname && chapter.nextName !== '');
    setCurrentChapter((elements.length === 0) ? null : elements[0]);
  }, [pathname]);

  return (
    <div className="flex justify-end px-8 h-[var(--footer-height)] text-right items-center">
      {
        currentchapter && 
        <Link href={currentchapter.nextLink} >-&gt;&nbsp;{currentchapter.nextName}</Link>
      }
    </div>
  )
};

export default Footer;
  