import Link from "next/link";
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter();
  
  return (
    <nav className="w-full flex items-center justify-center flex-col p-7 static">
      <div className="text-3xl p-4">
        <Link href="/">claudio rojas</Link>
      </div>

      <div className="flex w-screen lg:w-3/4 justify-center bg-secondary p-2">
        <div className="flex flex-wrap flex-row gap-1 text-xl h-full">
          <a href="/blog" className="px-2">Blog</a>
          <a href="/photography" className=" px-2">Photography</a>
          <a href="https://github.com/rojas-claudio" target="_blank" className=" px-2">Programming</a>
        </div>
      </div>
      
    </nav>

    
  )
}