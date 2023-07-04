import { usePathname } from "next/navigation";

const Footer = ({
  navigatorUI,
  handleNavigatorUI,
  openaiUI,
  handleOpenaiUI,
  dialogUI,
  handleDialogUI
}: {
  navigatorUI: boolean,
  handleNavigatorUI: any,
  openaiUI: boolean,
  handleOpenaiUI: any,
  dialogUI: boolean,
  handleDialogUI: any
}) => {
  const pathname = usePathname();
  return (
    <div className="z-10 flex items-center justify-between px-2 text-right min-h-[4rem] landscape:px-4">
      <div className="flex gap-8 item-center">
        {
          (pathname === '/') ? '' : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-8 h-8 cursor-pointer ${(dialogUI) ? '' : 'text-neutral-500'}`}
                onClick={handleDialogUI}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-8 h-8 cursor-pointer ${(openaiUI) ? '' : 'text-neutral-500'}`}
                onClick={handleOpenaiUI}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </>
          )
        }
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24" 
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer"
        onClick={handleNavigatorUI}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  )
};

export default Footer;
  