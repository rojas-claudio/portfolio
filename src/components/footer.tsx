import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 text-base-content">
        <aside>
          <p>Copyright © Claudio Rojas 2023</p>
          <div className="flex flex-row items-center justify-center">
            <a href="https://www.linkedin.com/in/rojas-claudio">LinkedIn</a>
            <p className="px-2">•</p>
            <a href="">Contact</a>
          </div>
        </aside>
      </footer>
    </>
  )
}