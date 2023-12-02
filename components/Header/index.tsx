import Link from "next/link"

export default function Header(){
    return(
        <div className="w-full flex justify-center py-8 sticky z-10 top-0 md:static bg-neutral-900 border-b border-b-neutral-700">
            <Link href='/' className="text-xl md:text-2xl text-white font-bold hover:opacity-90">Meu blog pessoal</Link>
        </div>
    )
}