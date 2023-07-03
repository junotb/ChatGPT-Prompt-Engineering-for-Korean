import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-end px-8 h-[var(--header-height)] bg-[center_left_2rem] bg-no-repeat bg-[url('/openai-logomark.svg')] bg-[length:2rem_2rem] items-center dark:bg-[url('/openai-white-logomark.svg')] text-sm sm:text-base">
      <Link href={"/"}><strong>ChatGPT Prompt Engineering for Developers</strong></Link>
    </div>
  )
};

export default Header;
