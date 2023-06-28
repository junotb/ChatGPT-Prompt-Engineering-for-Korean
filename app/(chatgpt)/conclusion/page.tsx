"use client";

import { completion } from "@/service/openai";
import { useRef, useState } from "react";

export default function Conclusion() {
  const apiKeyRef = useRef(null);
  const promptRef = useRef(null);
  const userTextRef = useRef(null);
  const resultRef = useRef(null);
  const [params, setParams] = useState({
    apiKey: '',
    prompt: '',
    userText: ''
  })
  const blurHandler = () => {    
    setParams({
      apiKey: apiKeyRef.current || '',
      prompt: promptRef.current || '',
      userText: userTextRef.current || ''
    });
  };
  const clickHandler = () => {
    const { apiKey, prompt, userText } = params;
    const result = completion(apiKey, prompt, userText);
    console.log(result);
  }
  return (
    <div className="flex w-full h-full gap-4 p-16">
      <div className="flex flex-col w-full gap-4">
        <input
          ref={apiKeyRef}
          onBlur={blurHandler}
          placeholder={"Api Key 를 입력해주세요."}
          className="w-full h-16 p-4 bg-transparent border-2 border-white rounded-lg"
        />
        <textarea
          ref={promptRef}
          onBlur={blurHandler}
          placeholder={"프롬프트를 입력해주세요."}
          className="w-full h-full p-4 bg-transparent border-2 border-white rounded-lg"
        ></textarea>
        <textarea
          ref={userTextRef}
          onBlur={blurHandler}
          placeholder={"자유롭게 내용을 입력해주세요."}
          className="w-full h-full p-4 bg-transparent border-2 border-white rounded-lg"
        ></textarea>
      </div>
      <div className="flex flex-col w-full gap-4">
        <textarea
          ref={resultRef}
          placeholder={"답변이 입력되는 곳입니다."}
          className="w-full h-full p-4 bg-transparent border-2 border-white rounded-lg"
        ></textarea>
        <button
          onClick={clickHandler}
          className="w-full h-16 border-2 border-white rounded-lg"
        >Send</button>
      </div>
    </div>
  )
}
