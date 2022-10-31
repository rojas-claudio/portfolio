import Directory from "./directory";

export default function Photo() {
  
  const images = Directory();
  const image = "rounded-md mb-5"
  const hover = "hover:scale-105 ease-in-out duration-100 cursor-pointer";

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

    
    <div className="flex justify-start items-center px-14">
      <title>Photography</title>
      <div className="h-full sm:columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-5">
        <a href={`${images[0]}`}>
          <img className={`${image} ${hover}`} src={images[0]}/>
        </a>
        <img className={`${image} ${hover}`} src={images[1]}/>
        <img className={`${image} ${hover}`} src={images[2]}/>
        <img className={`${image} ${hover}`} src={images[3]}/>
        <img className={`${image} ${hover}`} src={images[4]}/>
        <img className={`${image} ${hover}`} src={images[5]}/>
        <img className={`${image} ${hover}`} src={images[6]}/>
        <img className={`${image} ${hover}`} src={images[7]}/>
        <img className={`${image} ${hover}`} src={images[8]}/>
        <img className={`${image} ${hover}`} src={images[9]}/>
        <img className={`${image} ${hover}`} src={images[10]}/>
        <img className={`${image} ${hover}`} src={images[11]}/>
        <img className={`${image} ${hover}`} src={images[12]}/>
        <img className={`${image} ${hover}`} src={images[13]}/>
        <img className={`${image} ${hover}`} src={images[14]}/>
        <img className={`${image} ${hover}`} src={images[15]}/>
        <img className={`${image} ${hover}`} src={images[16]}/>
        <img className={`${image} ${hover}`} src={images[17]}/>
        <img className={`${image} ${hover}`} src={images[18]}/>
        <img className={`${image} ${hover}`} src={images[19]}/>
      </div>
    </div>
  );
}



/*

*/