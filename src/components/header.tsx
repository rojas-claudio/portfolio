import Link from "next/link";
import { useEffect } from "react"
import { useRouter } from "next/router"
import { themeChange } from 'theme-change'

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    themeChange(false);
  }, []);
  
  return (
    <nav className="w-[100vw] flex items-center justify-center flex-col p-7" style={{ position: router.asPath == "/" || router.asPath == "/about" || router.asPath =="/404" ? "fixed" : "sticky" }}>
      <div className="text-3xl p-4">
        <Link href="/">claudio rojas</Link>
      </div>

      
      
      <div className="flex w-3/4 justify-center bg-secondary p-2">
        <div className="flex flex-wrap flex-row gap-1 text-xl h-full">
          <a href="/photography" className=" px-2" target="_blank">Photography</a>
          <a href="https://github.com/rojas-claudio" className=" px-2" target="_blank">Programming</a>
          <a href="https://albumoftheyear.org/user/mrclaudio" className=" px-2" target="_blank">Music Reviews</a>
          <a href="/about" className="px-2">About</a>
        </div>
      </div>
      
    </nav>

    
  )
}