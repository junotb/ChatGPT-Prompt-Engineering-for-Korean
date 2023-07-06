import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-2 landscape:px-4 min-h-[4rem] bg-[rgb(var(--background-rgb))] items-center">
      <Link
        href="https://learn.deeplearning.ai/"
        target="_blank"
        className="w-8 h-8 bg-contain bg-no-repeat bg-[url('/openai-logomark.svg')] dark:bg-[url('/openai-white-logomark.svg')]"
      ></Link>
      <Link
        href={"/"}
      ><strong>ChatGPT Prompt Engineering for Korean</strong></Link>
    </div>
  )
};

export default Header;
