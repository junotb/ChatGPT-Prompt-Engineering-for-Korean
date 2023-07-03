"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Navigator from '@/components/Navigator';
import Openai from "@/components/Openai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Template = ({
  children
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname();
  const [mobileMode, setMobileMode] = useState(false);
  const [navigatorUI, setNavigatorUI] = useState(true);
  const [openaiUI, setOpenaiUI] = useState(true);
  const [dialogUI, setDialogUI] = useState(true);
  const handleNavigatorUI = () => {
    setNavigatorUI(!navigatorUI);
  };
  const handleOpenaiUI = () => {
    setOpenaiUI(true);
    setDialogUI(false);
  };
  const handleDialogUI = () => {
    setOpenaiUI(false);
    setDialogUI(true);
  };

  useEffect(() => {
    const initModeUI = (matches: Boolean) => {
      if (matches) {
        setMobileMode(true);
        setNavigatorUI(false);
        setOpenaiUI(false);
        setDialogUI(true);
      } else {
        setMobileMode(false);
        setNavigatorUI(true);
        setOpenaiUI(true);
        setDialogUI(true);
      }
    }
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.onchange = (e) => {
      initModeUI(e.matches);
    };
    initModeUI(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (mobileMode) {
      setNavigatorUI(false);
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Navigator
        navigatorUI={navigatorUI}
      />
      <main className={`flex h-[var(--main-height)] ${(mobileMode) ? 'flex-col' : ''}`}>
        {
          (pathname === '/') ? '' : (
            <Openai
              openaiUI={openaiUI}
            />
          )
        }
        {
          dialogUI &&
          <div className="w-full h-full p-4 overflow-y-scroll text-sm md:text-base">{children}</div>
        }
        {
          mobileMode &&
          <Footer
            handleNavigatorUI={handleNavigatorUI}
            handleOpenaiUI={handleOpenaiUI}
            handleDialogUI={handleDialogUI}
          />
        }
      </main>
    </>
  )
};

export default Template;