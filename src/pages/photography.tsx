import images from "../images"
import { useState } from "react";

export default function Photo() {
  const [currentImage, setCurrentImage] = useState("");

  return (
    /*
      Layout: 
        Grid spanning entire screen. Upon clicking an image, a carousel will appear with 
        the image selected focused. Description will be shown below the carosel and will change
        with the image.

      TO-DO:
        Columns are restricted to two when <img/> is wrapped in <a/>. No clue why this happens.
        Begin to work on dynamic routing for each image, enlarging it when clicked (with carousel UI element)
          Figure out how to store data associated with each image (camera info, date, etc). JSON object? 
    */

    <>

      <div className="flex justify-start items-center px-14">
        <title>Photography</title>
        <div className="h-full sm:columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-5">
          {images.map(image =>
            <div>
              <label htmlFor="modal">
                 <img className="rounded-md mb-5 hover:scale-105 ease-in-out duration-100 cursor-pointer" src={image} onClick={() => { setCurrentImage(image) }} />
              </label>
            </div>
          )}
        </div>
      </div>

      
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="modal cursor-pointer bg-opacity-90 backdrop-blur-md">
        <div className="modal-box relative w-screen w-11/12 max-w-xl" >
          <img src={currentImage} />
        </div>
      </label>
    </>
  );
}
