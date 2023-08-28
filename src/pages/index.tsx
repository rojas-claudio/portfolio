/*
  - Fix underline animation, possibly replace
*/

import Link from "next/link"

//<Link className="underline-global" href="/photography">Photography</Link>

export default function Index() {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <title>claudio rojas</title>
      <div className="flex flex-col gap-1 text-2xl">
        <a href="https://instagram.com/rojas.photo" className="underline-global" target="_blank">Photography</a>
        <a href="https://www.flickr.com/photos/197414684@N08/" className="underline-global" target="_blank">Flickr</a>
        <a href="https://github.com/rojas-claudio" className="underline-global" target="_blank">Programming</a>
        <a href="https://albumoftheyear.org/user/mrclaudio" className="underline-global" target="_blank">Music Reviews</a>
        <Link href="/about">About</Link>
      </div>

    </div>
  );
}
