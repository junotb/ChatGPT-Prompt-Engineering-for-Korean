import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-4 md:px-8 h-12 md:h-16 md:bg-[center_left_2rem] bg-[center_left_1rem] bg-no-repeat bg-[url('/openai-logomark.svg')] bg-[length:2rem_2rem] items-center dark:bg-[url('/openai-white-logomark.svg')] text-sm md:text-base">
      <Link href={"/"} className="w-8 h-full"></Link>
      <Link href={"/"}><strong>ChatGPT Prompt Engineering for Developers</strong></Link>
    </div>
  )
};

export default Header;
