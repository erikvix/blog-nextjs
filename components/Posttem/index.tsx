import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

interface PostItemProp {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

dayjs.locale("pt-br");
dayjs.extend(LocalizedFormat);

export default function PostItem({
  date,
  description,
  id,
  image,
  title,
}: PostItemProp) {
  return (
    <Link
      href={`/post/${id}`}
      className="bg-dark-gray-th flex md:flex-row flex-col border border-neutral-400/60 rounded-md hover:opacity-80 cursor-pointer hover:border-white/40"
    >
      <div className="relative aspect-video h-[207px] md:min-h-[209px] w-full md:w-1/5">
        <Image
          src={image}
          fill
          className="object-cover rounded-md rounded-e-none "
          alt=""
        />
      </div>
      <div className="flex flex-col p-4 justify-between">
        <div>
          <h2 className="mb-3 text-3xl font-bold text-white line-clamp-3">
            {title}
          </h2>
          <p className="text-sm mb-6 text-neutral-400">{description}</p>
        </div>
        <span className="font-mono text-pink-th">
          {dayjs(date).format("LL")}
        </span>
      </div>
    </Link>
  );
}
