"use client";

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navigator from '@/components/Navigator';
import { useState } from "react";

const Template = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [open, setOpen] = useState(false);
  const getState = () => {
    return open;
  }
  const setState = (state: boolean) => {
    setOpen(state);
  }
  const handleClick = () => {
    const state = getState();
    setState(!state);
  }

  return (
    <>
      <Header />
      <main className="sm:flex h-[calc(100vh-var(--header-height)-var(--footer-height))]">
        <Navigator open={open} />
        {children}
      </main>
      <Footer clickHandler={handleClick} />
    </>
  )
};

export default Template;