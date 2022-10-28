import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed">
      <h1 className="object-left-top text-3xl p-7">
        <Link href="/">claudio rojas</Link>
      </h1>
    </header>
  )
}