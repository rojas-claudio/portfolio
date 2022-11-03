import Link from "next/link";
import { useEffect } from "react"
import { useRouter } from "next/router"
import { themeChange } from 'theme-change'

export default function Header() {
  const router = useRouter();

  //Theme toggle:
  //
  useEffect(() => {
    themeChange(false);
  });
  //
 
  
  return (
    <nav className=" w-[99vw] flex items-center justify-between flex-wrap p-7" style={{ position: router.asPath == "/" || router.asPath == "/about" || router.asPath =="/404" ? "fixed" : "sticky" }}>
      <div className="text-3xl">
        <Link href="/">claudio rojas</Link>
      </div>
      <div>
        <input type="checkbox" className="toggle" data-toggle-theme="light,night"/>
      </div>
    </nav>

    
  )
}