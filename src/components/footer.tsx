import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 text-base-content">
        <aside>
          <p>Copyright © Claudio Rojas 2023 • Made with ♡ in Las Vegas</p>
          <div className="flex flex-row items-center justify-center">
            <a href="https://www.linkedin.com/in/rojas-claudio" target="_blank">LinkedIn</a>
            <p className="px-2">•</p>
            
            <a href="/contact">Contact</a>
            <div id="contact" className="modal">
              <div className="modal-box">
                <p>Coming soon.</p>
              </div>
            </div>
            
          </div>
        </aside>
      </footer>
    </>
  )
}