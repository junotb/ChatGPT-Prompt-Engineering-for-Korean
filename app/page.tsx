import Link from "next/link";

type Chapter = {
  name: string,
  description: string,
  link: string,
}

export default function Home( chapters: Chapter[]) {
  return (
    <div className="p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {
          chapters.map((chapter, index) => (
            <Link
              key={index}
              href={chapter.link}
              className="flex justify-center items-center border-2 border-white rounded-lg p-4"
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
