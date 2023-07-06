import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col landscape:justify-center landscape:items-center gap-8">
      <h1>환영합니다</h1>
      <div className="grid grid-cols-1 landscape:grid-cols-2 w-full landscape:w-fit gap-4">
        <Link
          href="https://learn.deeplearning.ai/chatgpt-prompt-eng/"
          target="_blank"
          className="border-2 border-black dark:border-white w-full p-4 landscape:w-72 rounded-md hover:border-neutral-500 hover:text-neutral-500 active:border-neutral-500 active:text-neutral-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-6 h-6 pr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
          <h2>DeepLearning.AI</h2>
          <p>위 사이트의 학습을 돕기 위해 만들어졌습니다</p>
        </Link>
        <div className="border-2 border-black dark:border-white w-full p-4 landscape:w-72 rounded-md">
          <h2>학습 구성</h2>
          <p>각 페이지는 Open AI 실습 툴과 번역본으로 구성되어 있습니다</p>
        </div>
      </div>
      <h1>준비해주세요</h1>
      <div className="grid grid-cols-1 landscape:grid-cols-2 w-full landscape:w-fit gap-4">
        <Link
          href="https://openai.com/"
          target="_blank"
          className="border-2 border-black dark:border-white w-full p-4 landscape:w-72 rounded-md hover:border-neutral-500 hover:text-neutral-500 active:border-neutral-500 active:text-neutral-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-6 h-6 pr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
          <h2>Open AI 가입</h2>
          <p>홈페이지에 접속하셔서 계정을 생성해주세요</p>
        </Link>
        <Link
          href="https://platform.openai.com/"
          target="_blank"
          className="border-2 border-black dark:border-white w-full p-4 landscape:w-72 rounded-md hover:border-neutral-500 hover:text-neutral-500 active:border-neutral-500 active:text-neutral-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-6 h-6 pr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
          <h2>API Key 발급</h2>
          <p>API 페이지에 접속하셔서 API Key를 발급해주세요</p>
        </Link>
      </div>
      <h1>유의해주세요</h1>
      <div className="grid grid-cols-1 landscape:grid-cols-2 w-full landscape:w-fit gap-4">
        <div className="border-2 border-black dark:border-white w-full p-4 landscape:w-72 rounded-md">
          <h2>개인정보보호</h2>
          <p>Api Key와 같은 개인정보는 일절 수집하지 않습니다.</p>
        </div>
        <div className="border-2 border-black dark:border-white w-full p-4 landscape:w-72 rounded-md">
          <h2>ChatCompletion</h2>
          <p>Open AI 실습 툴은 Chat 기반으로 만들어졌습니다</p>
        </div>
      </div>
    </div>
  )
}
