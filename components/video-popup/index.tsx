import React, {PropsWithChildren, useState} from 'react';
import Image from "next/image";

interface VideoPopupProps extends PropsWithChildren {
  imgUrl: string;
  vidUrl: string;
  updateOpenStatus?: (status: boolean) => void;
  currentStatus?: boolean;
}

const VideoPopup = (props: VideoPopupProps) => {
  const {imgUrl, vidUrl, currentStatus, updateOpenStatus} = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
    if (props.updateOpenStatus) {
      props.updateOpenStatus(true);
    }
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    if (props.updateOpenStatus) {
      props.updateOpenStatus(false);
    }
  };

  return (
    <div
      className="text-center rounded-2xl opacity-95 hover:shadow-2xl hover:opacity-100 transition-transform duration-500 ease-in-out">
      <Image onClick={handleOpenPopup} width={200} height={350}
             className={"cursor-pointer rounded-2xl " + (currentStatus ?? false ? " opacity-30" : "opacity-100")}
             src={imgUrl} alt="-"/>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-70 z-30"
          onClick={handleClosePopup}>
          <div
            className="relative w-full max-w-lg max-h-[70vh] md:max-h-[80vh] sm:w-11/12 md:w-3/4 md:mt-[-20px] p-0 rounded-2xl border"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute cursor-pointer top-2 right-2 text-white text-3xl font-bold focus:outline-none z-50"
              onClick={handleClosePopup}
              aria-label="Close Video">
              &times;
            </button>
            <video controls autoPlay className="w-full rounded-2xl h-full z-40">
              <source src={vidUrl} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
