/*
  - Fix underline animation, possibly replace
*/

import Link from "next/link"
import React, { useEffect } from 'react'

//<Link className="underline-global" href="/photography">Photography</Link>

let i = 0
let current = ""
let word = "Hi, my name is Claudio"
let blinkInterval

function type() {
  let current = word

  document.getElementById("welcome").textContent = current.substring(0, ++i)
  document.getElementById("welcome").textContent += "_"

  if (i < current.length) {
    setTimeout(type, 150)
  } else {
    blink()
  }
}

function blink() {
  blinkInterval = setInterval(() => {
    let welcome = document.getElementById("welcome")
    if (welcome.textContent.endsWith("_")) {
      welcome.textContent = welcome.textContent.slice(0, -1)
      welcome.textContent += "⠀"
    } else {
      welcome.textContent = welcome.textContent.slice(0, -1)
      welcome.textContent += "_"
    }
  }, 1000)
}

export default function Index() {
  useEffect (() => {
    type()

    return () => {clearInterval(blinkInterval)}
  })
  
  return (
    <div className="flex flex-col justify-center items-center content-start">
      <title>claudio rojas</title>

      <div className="w-screen p-1 flex justify-center items-center">
        <h1 id="welcome" className="text-4xl text-center"></h1>
      </div>

      <div className="p-2"></div>
      
      <div className="w-3/4 lg:w-2/5 p-2 flex-col justify-start items-center bg-secondary">
        <p className="text-xl text-left break-words">I'm a senior in high school with a passion for technology, software development, photography, and aviation. I currently specialize in full-stack engineering and information technologies, with professional experience in:</p>
        <br></br>
        <p className="text-xl text-left break-words">• C# Development</p>
        <p className="text-xl text-left break-words">• Python Development</p>
        <p className="text-xl text-left break-words">• IT Operations</p>
        <p className="text-xl text-left break-words">• Customer Support</p>
        <p className="text-xl text-left break-words">• Computer Repair</p>
        <p className="text-xl text-left break-words">• Software Testing</p>
        <p className="text-xl text-left break-words">• System Administration</p>
        <br></br>
        <p className="text-xl text-left break-words">Outside of work, I've worked with technologies such as Swift, SwiftUI, .NET, NextJS, NodeJS, C, C#, Java, and more. When not programming, I love to take pictures on both film and digital cameras. </p>
        <p className="text-xl text-left break-words">Feel free to check out some of my projects above. This site is always changing, so keep an eye out for new developments. Blog coming soon.          </p>
      </div>
    </div>
  );
}
