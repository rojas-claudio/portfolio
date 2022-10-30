import Link from "next/link";
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter();
  
  return (
    <nav className="flex items-center justify-between flex-wrap p-7" style={{ position: router.asPath == "/" || router.asPath == "/about" || router.asPath =="/404" ? "fixed" : "sticky" }}>
      <div className="text-3xl">
        <Link href="/">claudio rojas</Link>
      </div>
    </nav>

    
  )
}