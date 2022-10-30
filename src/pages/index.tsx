/*
  - Fix underline animation, possibly replace
*/

import Link from "next/link"
export default function Index() {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <title>claudio rojas</title>
      <div className="flex flex-col gap-1 text-2xl">
        <Link className="underline-global" href="/photography">Photography</Link>
        <a href="https://github.com/itsthered1" className="underline-global" target="_blank">Programming</a>
        <a href="https://albumoftheyear.org/user/mrclaudio" className="underline-global" target="_blank">Music Reviews</a>
        <Link href="/about">About</Link>
      </div>

    </div>
  );
}
