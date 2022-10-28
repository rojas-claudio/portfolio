import Link from "next/link"
import Image from "next/image"
export default function Photo() {
  return (
    /*
      Layout: 
        Grid spanning entire screen. Upon clicking an image, a carousel will appear with 
        the image selected focused. Description will be shown below the carosel and will change
        with the image.
    */
    <div data-theme="retro" className="flex h-screen flex-col justify-start items-center">
      <div className="p-28 grid grid-flow-col grid-flow-row gap-4 lg:gap-8">
        <div className="p-4 rounded-md flex items-center justify-center">
          
        </div>
      </div>
    </div>
  );
}