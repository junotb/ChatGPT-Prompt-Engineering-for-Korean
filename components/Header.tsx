"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="flex justify-end px-8 h-[var(--header-height)] bg-[center_left_2rem] bg-no-repeat bg-[url('/openai-logomark.svg')] bg-[length:2rem_2rem] items-center dark:bg-[url('/openai-white-logomark.svg')]">
      <Link href={"/"}><strong>ChatGPT Prompt Engineering for Developers (한국어)</strong></Link>
    </div>
  )
};

export default Header;
