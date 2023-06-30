"use client";

import { useRef, useState } from "react";
import { completion } from "@/service/openai";

const Openai = () => {
  const apiKeyRef = useRef<HTMLInputElement>(null);
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const clickHandler = async () => {
    const { apiKey, prompt } = {
      apiKey: apiKeyRef.current!.value || '',
      prompt: promptRef.current!.value || ''
    };
    const content = await completion(apiKey, prompt);
    contentRef.current!.value = content;
  }

  return (
    <div className="flex flex-col h-full min-w-[28rem] w-[28rem] p-4 gap-4">
      <input
        ref={apiKeyRef}
        className='w-full min-h-[4rem] h-16 p-4 border-2 border-black dark:border-white rounded-lg bg-transparent'
        placeholder="Hello Openai Api Key!" />
      <textarea
        ref={promptRef}
        className='w-full h-full p-4 border-2 border-black dark:border-white rounded-lg bg-transparent overflow-y-scroll'
        placeholder="Hello Openai Prompt!"
      ></textarea>
      <textarea
        ref={contentRef}
        className='w-full h-full p-4 border-2 border-black dark:border-white rounded-lg bg-transparent overflow-y-scroll'
        placeholder="Hello Openai Content!"
      ></textarea>
      <button
        onClick={clickHandler}
        className='flex items-center justify-center w-full min-h-[4rem] h-16 border-2 border-black dark:border-white rounded-lg'
      >Hello Openai Button!</button>
    </div>
  )
};

export default Openai;