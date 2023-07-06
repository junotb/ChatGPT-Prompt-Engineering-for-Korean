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

  // Message 타입 구성
  const getMessage = (role: string, content: string): Message => {
    return {
      "role": role,
      "content": content
    };
  };

  // OpenAI 서비스 호출
  const callOpenAI = async (apiKey: string, messages: Message[]): Promise<string> => {
    try {
      const content = await completion(apiKey, messages).then(content => (typeof(content) === 'undefined') ? '' : content);
      return content;      
    } catch (error) {
      console.log(error);
      return '';
    }
  };

  const clickHandler = async () => {
    // 로딩 상태 시작
    setLoading(true);

    // apiKey 획득
    const apiKey = apiKeyRef.current!.value || '';
    if (apiKey === '') {
      apiKeyRef.current!.focus();
    }

    if (systemPromptRef.current) {
      if (typeof(messages.find(message => message.role === 'system')) === 'undefined') {
        const systemMessage: Message = getMessage("system", systemPromptRef.current!.value || '');
        messages.push(systemMessage);        
      } else {
        messages.find(message => message.role === 'system')!.content = systemPromptRef.current!.value || '';
      }
    }
    if (userPromptRef.current) {
      const userMessage: Message = getMessage("user", userPromptRef.current!.value || '');
      messages.push(userMessage);
    }

    const content = await callOpenAI(apiKey, messages);
    contentRef.current!.value = content || '';

    const assistantMessage: Message = getMessage("assistant", content);
    messages.push(assistantMessage);

    if (messages.length > 10) {
      const popedMessages = messages.splice(1, 2);
    }

    setMessages(messages);

    // 로딩 상태 종료
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
        className={`w-full h-full p-2 landscape:p-4 overflow-y-auto border-2 border-black rounded-md dark:border-white ${(loading) ? ' bg-neutral-500' : 'bg-transparent'}`}
        placeholder="프롬프트를 입력해주세요"
        readOnly={(loading) ? true : false}
      ></textarea>
      <textarea
        ref={contentRef}
        className={`w-full h-full p-2 landscape:p-4 overflow-y-auto border-2 border-black rounded-md dark:border-white ${(loading) ? ' bg-neutral-500' : 'bg-transparent'}`}
        placeholder="Chat Gpt 답변이 등록되는 곳입니다"
        readOnly
      ></textarea>
      <button
        onClick={clickHandler}
        className='flex items-center justify-center w-full h-16 p-2 border-2 border-black rounded-md landscape:p-4 dark:border-white'
        disabled={(loading) ? true : false}
      >보내기</button>
    </div>
  )
};

export default Openai;