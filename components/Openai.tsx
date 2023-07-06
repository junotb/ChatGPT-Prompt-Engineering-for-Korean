"use client";

import { useRef, useState } from "react";
import { completion } from "@/service/openai";
import { Message } from "@/types/types";

const Openai = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const apiKeyRef = useRef<HTMLInputElement>(null);
  const systemPromptRef = useRef<HTMLTextAreaElement>(null);
  const userPromptRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const clickHandler = async () => {
    setLoading(true);

    const apiKey = apiKeyRef.current!.value;

    if (systemPromptRef.current) {
      const systemMessage: Message = {
        "role": "system",
        "content": systemPromptRef.current!.value || ''
      }
      messages.push(systemMessage);
    }
    if (userPromptRef.current) {
      const userMessage: Message = {
        "role": "user",
        "content": userPromptRef.current!.value || ''
      }
      messages.push(userMessage);
    }

    const content = await completion(apiKey, messages).then(content => (typeof(content) === 'undefined') ? '' : content);
    contentRef.current!.value = content;

    const assistantMessage: Message = {
      "role": "assistant",
      "content": content
    }
    messages.push(assistantMessage);

    setMessages(messages);

    setLoading(false);
  }

  return (
    <div className="flex flex-col w-full landscape:min-w-[24rem] landscape:max-w-[30rem] h-full p-2 landscape:p-4 gap-4">
      <input
        ref={apiKeyRef}
        className={`w-full h-16 p-2 landscape:p-4 border-2 border-black dark:border-white rounded-md ${(loading) ? ' bg-neutral-500' : 'bg-transparent'}`}
        placeholder="Api Key를 입력해주세요"
        readOnly={(loading) ? true : false}
      />
      <textarea
        ref={systemPromptRef}
        className={`grow w-full h-full p-2 landscape:p-4 overflow-y-auto border-2 border-black rounded-md dark:border-white ${(loading) ? ' bg-neutral-500' : 'bg-transparent'}`}
        placeholder="시스템 프롬프트를 입력해주세요"
        readOnly={(loading) ? true : false}
      ></textarea>
      <textarea
        ref={userPromptRef}
        className={`grow w-full h-full p-2 landscape:p-4 overflow-y-auto border-2 border-black rounded-md dark:border-white ${(loading) ? ' bg-neutral-500' : 'bg-transparent'}`}
        placeholder="프롬프트를 입력해주세요"
        readOnly={(loading) ? true : false}
      ></textarea>
      <textarea
        ref={contentRef}
        className={`grow w-full h-full p-2 landscape:p-4 overflow-y-auto border-2 border-black rounded-md dark:border-white ${(loading) ? ' bg-neutral-500' : 'bg-transparent'}`}
        placeholder="Chat Gpt 답변이 등록되는 곳입니다"
        readOnly
      ></textarea>
      <button
        onClick={clickHandler}
        className='flex items-center justify-center w-full h-16 p-2 landscape:p-4 border-2 border-black dark:border-white rounded-md'
        disabled={(loading) ? true : false}
      >보내기</button>
    </div>
  )
};

export default Openai;