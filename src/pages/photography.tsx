import Card from "../components/linked-image"

export default function Photo() {
  const images = [
    "/photos/air-canada-a.jpg",
    "/photos/amalfi-a.jpg",
    "/photos/amalfi-b.jpg",
    "/photos/construction-a.jpg",
    "/photos/construction-b.jpg",
    "/photos/fco.jpg",
    "/photos/flagstaff-a.jpg",
    "/photos/las-a.jpg",
    "/photos/las-b.jpg",
    "/photos/las-c.jpg",
    "/photos/las-d.jpg",
    "/photos/las-e.jpg",
    "/photos/montreal-a.jpg",
    "/photos/montreal-b.jpg",
    "/photos/mount-charleston-a.jpg",
    "/photos/mount-charleston-b.jpg",
    "/photos/roma-a.jpg",
    "/photos/vistas-a.jpg",
  ]
  9
  return (
    /*
      Layout: 
        Grid spanning entire screen. Upon clicking an image, a carousel will appear with 
        the image selected focused. Description will be shown below the carosel and will change
        with the image.
    */

    <div data-theme="retro" className="flex justify-start items-cente px-14">
      <div className="grid h-full flex-col grid-rows-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <img className="rounded-lg" src={images[0]}/>
        <img className="rounded-lg" src={images[1]}/>
        <img className="rounded-lg" src={images[2]}/>
        <img className="rounded-lg" src={images[3]}/>
        <img className="rounded-lg" src={images[4]}/>
        <img className="rounded-lg" src={images[5]}/>
        <img className="rounded-lg" src={images[6]}/>
        <img className="rounded-lg" src={images[7]}/>
        <img className="rounded-lg" src={images[8]}/>
        <img className="rounded-lg" src={images[9]}/>
        <img className="rounded-lg" src={images[10]}/>
        <img className="rounded-lg" src={images[11]}/>
        <img className="rounded-lg" src={images[12]}/>
        <img className="rounded-lg" src={images[13]}/>
        <img className="rounded-lg" src={images[14]}/>
        <img className="rounded-lg" src={images[15]}/>
        <img className="rounded-lg" src={images[16]}/>
        <img className="rounded-lg" src={images[17]}/>
        <img className="rounded-lg" src={images[18]}/>
        <img className="rounded-lg" src={images[19]}/>
      </div>
    </div>
  );
}

/*
  <div className="p-28 grid grid-flow-col grid-flow-row gap-4 lg:gap-8">
    <div className="p-4 flex items-center justify-center gap-5">
      <Image
        src="/photos/air-canada-a.jpg"
        width="200"
        height="200"
        className="rounded-md"
      />
      <Image
        src="/photos/amalfi-a.jpg"
        width="350"
        height="350"
        className="rounded-md"
      />
    </div>
  </div>
*/