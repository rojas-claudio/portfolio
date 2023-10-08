import Link from "next/link"
export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <title>!</title>
      <h1 className="text-2xl font-light">Uh oh. There's nothing here.</h1>
    </div>
  );
}