import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from 'react-icons/fa'
import { getPost } from '@/services/api'
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.locale("pt-br")
dayjs.extend(LocalizedFormat)

interface PostProps {
    params: {
        id: string;
    }
}

export default async function Post({params} : PostProps) {
    const post = await getPost(params.id)
    console.log(post)
  return (
    <div className="mx-auto my-0 max-w-6xl px-4">
      <Link href="/" className="text-white font-medium hover:opacity-80 flex flex-row items-center gap-4 my-6" >
        <FaArrowLeft/>
        Posts recentes</Link>
      <h1 className="font-bold text-white text-3xl md:text-5xl mt-2" >{post.title}</h1>
      <span className="font-mono text-sm md:text-base text-pink-th">{dayjs(post.createdAt).format('LL')}</span>
      <div className="relative aspect-video w-full my-8">
        <Image
          src={post.image.url}
          fill
          className="object-cover rounded-md rounded-e-none "
          alt=""
        />
      </div>
      <p className="text-white text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        reiciendis eveniet adipisci modi consectetur quaerat error nemo, cumque
        soluta repellat veritatis est nulla sapiente optio, magni blanditiis ad
        beatae voluptate!
      </p>
    </div>
  );
}
