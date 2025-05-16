import React, {PropsWithChildren} from 'react';
import HeroIcon from "../heroicon";

interface InfoItemProps {
  title?: string;
  description?: string;
  type?: "default" | "warning" | "danger" | "success";
  narrow?: boolean;
}

function InfoItem({title, description, type, narrow}: PropsWithChildren<InfoItemProps>) {
  const color = type === "danger" ? "text-red-400" :
    (type == "success" ? "text-lime-600" : "text-yellow-400");

  const defaultView = <div
    className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-[600px]">
    <div className="p-3 mr-4 text-orange-500 rounded-full">
      <HeroIcon icon="information-circle" other={"text-[32px] " + color} size="w-10 h-10"></HeroIcon>
    </div>
    <div className="text-primary-light">
      <div className="text-lg font-light leading-10">
        {title}
      </div>
      <p className="text-l font-extralight leading-8">
        {description}
      </p>
    </div>
  </div>;

  const narrowView = <div className="flex flex-row items-start bg-gray-100
    h-auto w-auto rounded-lg shadow-sm border border-gray-200
    gap-2 p-2 align-middle">
    <HeroIcon icon="information-circle" other={"text-[24px] " + color} size="w-6 h-6"></HeroIcon>

    <div className="font-light text-gray-400">
      {description || 'NA'}
    </div>
  </div>;

  return <>
    {!narrow ? defaultView : narrowView}
  </>
}

export default InfoItem;
