export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <p>본 사이트는 <a href="https://learn.deeplearning.ai/chatgpt-prompt-eng/" className="hover:text-neutral-500" target="_blank"><strong>DeepLearning.AI의 코스</strong></a> 학습을 돕기 위해 만들어졌습니다.</p>
      <p>각 페이지는 Open AI 실습 툴과 한국어 번역본으로 구성되어 있습니다.</p>
      <p>Open AI 실습 툴 구동을 위해 <a href="https://openai.com/" className="hover:text-neutral-500" target="_blank"><strong>Open AI 사이트</strong></a>에 가입하셔서 API Key를 발급해주세요.</p>
    </div>
  )
}
