const Footer = ({
  clickHandler
}: {
  clickHandler: any
}) => {
  return (
    <div className="flex justify-end px-8 h-[var(--footer-height)] text-right items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24" 
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 sm:hidden"
        onClick={clickHandler}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  )
};

export default Footer;
  