import React, {PropsWithChildren, ReactElement} from 'react';
import PublicPageHeader from "@/components/publicPageHeader";
import Image from "next/image";

interface HowPageProperties {
  onBack?: () => void;
  onContactUs?: () => void;
}

function HowContentComponent(properties: PropsWithChildren<HowPageProperties>):ReactElement{
  const {onBack, onContactUs} = properties;
  const contentFragmentation = <div className="flex flex-row justify-center text-center w-ful p-8 pb-16 mb-6 bg-primary h-auto">
    <ul className="h-min w-full list-none leading-[50px] text-white text-xl font-extralight">
      <li className="text-2xl font-light opacity-80">How it works !</li>
      <li className="opacity-50 text-2xl mt-12">Fully flexible family structure</li>
      <li className="opacity-50 text-2xl mt-4">Map relationships with assets</li>
      <li className="opacity-50 text-2xl mt-4">Enable a digital scratchpad per family</li>
      <li className="opacity-50 text-2xl mt-4">Wrap everything in a secured API layer</li>
    </ul>
  </div>;

  const contentOpenFamilySetup = <div className="flex flex-col items-center text-2xl font-semibold w-full text-center h-auto">
    <div className="w-full opacity-70 p-4">Open Family Setup</div>
    <Image width={800} height={600} src='/images/open-family.svg' alt="-" />
  </div>

  const contentFamilyGroupExplain = <div className="flex flex-rows justify-center text-center w-ful p-8 bg-alternate min-h-[300px]">
    <ul className="h-min w-full list-none leading-[50px]
                                                text-white text-xl font-extralight">
      <li className="text-2xl font-light opacity-80 mb-8">Family/Groups</li>
      <li className="opacity-50 text-2xl mt-4">Connect <span className="font-bold">members to accounts and content</span> in any configuration</li>
      <li className="opacity-50 text-2xl mt-4">Implement authorization</li>
      <li className="opacity-50 text-2xl mt-4">Flatten and simplify preserving all permissions</li>
    </ul>
  </div>;

  return <div className="scroll-auto h-screen">
    <PublicPageHeader isCompact={true} onContactUs={onContactUs}> </PublicPageHeader>
    {contentFragmentation}
    {contentOpenFamilySetup}
    {contentFamilyGroupExplain}
  </div>}

export default HowContentComponent;
