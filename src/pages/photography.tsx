import imageData from "../../public/images/imageData.json"
import clsx from "clsx";
import { useState } from "react";

export default function Photo() {
  const [currentImage, setCurrentImage] = useState({
      "path": "/example/path",
      "iso": 0,
      "shutter": "0/0s",
      "aperture": "f/0",
      "location": "Earth",
      "description": "Example image description",
      "size": "max-w-4xl"
  });

  return (
    /*
      TO-DO:
        Fix spacing with flex-wrap on image + metadata
        Some images not sizing correctly
        
    */
    <>
      <div className="flex justify-start items-center px-14">
        <title>Photography</title>
        <div className="h-full sm:columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-5">
          {imageData.images.map(image =>
            <div>
              <label htmlFor="modal">
                 <img className="rounded-md mb-5 hover:scale-105 ease-in-out duration-100 cursor-pointer" src={image.path} onClick={() => { setCurrentImage(image) }} />
              </label>
            </div>
          )}
        </div>
      </div>

      
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="modal cursor-pointer bg-opacity-90 backdrop-blur-md flex-wrap">
        <div className={clsx(`modal-box relative w-full`, currentImage.size)}>
          <img src={currentImage.path}/>
        </div>
        
        <div className={"pl-6 bg-default rounded-lg items-start"}>
          <div className="flex gap-1 pt-1 self-center">
            <img src="/info.svg" className="scale-80 pr-1"/>
            <h1 className="text-lg text-white">{currentImage.description == "" ? "N/A" : currentImage.description}</h1>
          </div>
          <div className="flex gap-1 pt-1 self-center">
            <img src="/shutter.svg" className="scale-80 pr-1"/>
            <h1 className="text-lg text-white">{currentImage.shutter}</h1>
          </div>
          <div className="flex gap-1 pt-1 self-center">
            <img src="/aperture.svg" className="scale-80 pr-1"/>
            <h1 className="text-lg text-white">{currentImage.aperture}</h1>
          </div>
          <div className="flex gap-1 pt-1 self-center">
            <img src="/iso.svg" className="scale-80 pr-1"/>
            <h1 className="text-lg text-white">{"ISO " + currentImage.iso}</h1>
          </div>
          <div className="flex gap-1 pt-1 self-center">
            <img src="/location.svg" className="scale-80 pr-1"/>
            <h1 className="text-lg text-white">{currentImage.location}</h1>
          </div>
        </div>

      </label>
    </>
  );
}
