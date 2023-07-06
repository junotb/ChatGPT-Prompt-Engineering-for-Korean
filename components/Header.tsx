import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-start px-2 landscape:px-4 min-h-[4rem] bg-[rgb(var(--background-rgb))] items-center">
      <Link
        href={"/"}
      ><strong>ChatGPT Prompt Engineering for Korean</strong></Link>
    </div>
  )
};

export default Header;
