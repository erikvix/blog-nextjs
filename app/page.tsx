import PostItem from "@/components/Posttem";
import Image from "next/image";
import { getPosts } from '../services/api'

interface Post {
  id: string,
  image: {url: string},
  title: string,
  shortDescription: string,
  createdAt: string,
  
  }

export default async function Home() {
    const posts = await getPosts();
  return (
      <div className="mx-auto my-0 max-w-6xl px-4">
        <h1 className="text-white md:text-3xl text-2xl font-bold mt-6">Posts recentes</h1>
        <div className="flex flex-col gap-6 my-6">
          {posts.map((post: Post) =>(
          <PostItem
            id={post.id}
            title={post.title}
            description={post.shortDescription}
            image={post.image.url}
            date={post.createdAt}
            key={post.id}
            />
          ))}
          
        </div>
      </div>

  )
}
