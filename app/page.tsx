import Navigator from "@/components/Navigator";

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <Navigator />
      <div className="w-full h-full p-16 flex justify-center items-center">        
        Hello Home!
      </div>
    </div>
  )
}
