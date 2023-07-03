"use client";

import Footer from "@/components/Footer"
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
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    mediaQuery.onchange = (e) => {
      initModeUI(e.matches);
    };
    initModeUI(mediaQuery.matches);
  }, []);

  return (
    <>
      <Header />
      <Navigator
        navigatorUI={navigatorUI}
      />
      {
        (pathname === '/') ? '' : (
          <Openai
            openaiUI={openaiUI}
          />
        )
      }
      {
        dialogUI &&
        <main className="flex p-4 h-[var(--main-height)]">
          <div className="w-full h-full pr-2 overflow-y-scroll">{children}</div>
        </main>
      }
      <Footer
        mobileMode={mobileMode}
        handleNavigatorUI={handleNavigatorUI}
        handleOpenaiUI={handleOpenaiUI}
        handleDialogUI={handleDialogUI}
      />
    </>
  )
};

export default Template;