import { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"

export default function GridGallery({ images }) {
 
  return (
    <div className="grid grid-cols-3 grid-rows-0 gap-3">
      {images &&
        images.map((imageUrl, index) => (
            <Card
              imageUrl={imageUrl}
              show={images[index]}
            />
        ))}
    </div>
  );
}

function Card({ imageUrl, show }) {
  return (
    <div
      className={`justify-self-auto relative transition ease-in duration-300 transform ${show ? "" : "translate-y-0 opacity-0"}`}>
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in">
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-25 ease-in transition duration-200 cursor-pointer"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm"> </div>
      </div>
      <img src={imageUrl} alt=""/>
    </div>
  );
}
