import React, {PropsWithChildren, ReactElement} from 'react';
import Image from "next/image";
import Link from "next/link";

interface PressItemProperties {
  logo: string;
  title: string;
  text: string;
  pageId?: string;
  onClick?: (url: string) => void;
}

function PressItem(properties: PropsWithChildren<PressItemProperties>):ReactElement {
  const {logo, title, text, onClick, pageId} = properties;

  return <Link href={`/docs/press/${pageId}#top`} className="flex flex-col items-center justify-center cursor-pointer bg-gray-50
                         border-gray-200 border-1 rounded-md text-center md:max-w-[400px] w-full p-md:p-0 md:gap-2
                         hover:shadow-lg hover:opacity-100 hover:scale-105 hover:text-blue-900 transform transition-all duration-300
                         bg-bottom-wave bg-cover bg-no-repeat bg-center">
    <div className="flex flex-row justify-center text-primary p-4 mt-4 opacity-80 font-medium text-lg gap-3">
      <Image width={32} height={32} src={logo} alt="-"/>
      <div className="opacity-80 text-primary">{title}</div>
    </div>

    <div className="text-lg font-extralight leading-6 h-auto min-h-[100px] opacity-50 p-4">
      {text}
    </div>
  </Link>
}

export default PressItem;
