import Link from "next/link";
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter();
  return (
    <header style={{ position: router.asPath == "/" || router.asPath == "/about" ? "fixed" : "sticky" }}>
      <h1 className="object-left-top text-3xl p-7">
        <Link href="/">claudio rojas</Link>
      </h1>
    </header>
  )
}