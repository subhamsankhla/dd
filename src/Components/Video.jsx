import React, { useRef } from 'react';
import city from '../assets/img/png/video.mp4';

const Video = () => {
  const videoo = useRef();

  const handleplay = () => {
    videoo.current.play();
  };
  const handlepause = () => {
    videoo.current.pause();
  };

  return (
    <div>
      <div className=" m-auto w-100 d-flex justify-content-center flex-column align-items-center">
        <video width={800} height={500} ref={videoo}>
          <source src={city} />
        </video>
        <div className=" d-flex">
          <button
            className=" mx-3 py-3 px-4 bg-dark text-white fs-4 border-0 rounded-4"
            onClick={handleplay}>
            play
          </button>
          <button
            className=" mx-3 py-3 px-4 bg-dark text-white fs-4 border-0 rounded-4"
            onClick={handlepause}>
            pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
