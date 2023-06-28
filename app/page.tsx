import { Chapter } from "@/types/types";
import Link from "next/link";
import { Chapters } from "@/pages/api/chapters.json"

export default function Home() {
  const chapters: Chapter[] = Chapters;
  return (
    <div className="p-16">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {
          chapters &&
          chapters.map((chapter, index) => (
            <Link
              key={index}
              href={chapter.link}
              className="flex items-center justify-center p-4 border-2 border-white rounded-lg"
            >
              <h3><strong>{chapter.name}</strong></h3>
              <p>{chapter.description}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
