import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-4 md:px-8 h-16 items-center">
      <Link
        href={"/"}
        className="w-8 h-8 bg-contain bg-no-repeat bg-[url('/openai-logomark.svg')] dark:bg-[url('/openai-white-logomark.svg')]"
      ></Link>
      <Link
        href={"/"}
      ><strong>ChatGPT Prompt Engineering for Developers</strong></Link>
    </div>
  )
};

export default Header;
