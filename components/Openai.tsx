"use client";

import { useRef, useState } from "react";
import { completion } from "@/service/openai";

const Openai = () => {
  const [loading, setLoading] = useState(false);
  const apiKeyRef = useRef<HTMLInputElement>(null);
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const clickHandler = async () => {
    setLoading(true);
    
    const { apiKey, prompt } = {
      apiKey: apiKeyRef.current!.value || '',
      prompt: promptRef.current!.value || ''
    };
    const content = await completion(apiKey, prompt).then(content => (typeof(content) === 'undefined') ? '' : content);
    contentRef.current!.value = content;

    setLoading(false);
  }

  return (
    <div className="flex flex-col w-full landscape:min-w-[24rem] landscape:max-w-[30rem] h-full p-2 landscape:p-4 gap-4">
      <input
        ref={apiKeyRef}
        className={`w-full h-16 p-2 landscape:p-4 border-2 border-black dark:border-white rounded-md bg-transparent ${(loading) ? ' bg-neutral-500' : ''}`}
        placeholder="Api Key를 입력해주세요"
        readOnly={(loading) ? true : false}
      />
      <textarea
        ref={promptRef}
        className={`grow w-full h-full p-2 landscape:p-4 overflow-y-auto bg-transparent border-2 border-black rounded-md dark:border-white ${(loading) ? ' bg-neutral-500' : ''}`}
        placeholder="프롬프트를 입력해주세요"
        readOnly={(loading) ? true : false}
      ></textarea>
      <textarea
        ref={contentRef}
        className={`grow w-full h-full p-2 landscape:p-4 overflow-y-auto bg-transparent border-2 border-black rounded-md dark:border-white ${(loading) ? ' bg-neutral-500' : ''}`}
        placeholder="Chat Gpt 답변이 등록되는 곳입니다"
        readOnly
      ></textarea>
      <button
        onClick={clickHandler}
        className='flex items-center justify-center w-full h-16 p-2 landscape:p-4 border-2 border-black dark:border-white rounded-md'
      >보내기</button>
    </div>
  )
};

export default Openai;