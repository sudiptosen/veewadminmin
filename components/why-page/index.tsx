import React, {PropsWithChildren, ReactElement} from 'react';
import PublicPageHeader from "@/components/publicPageHeader";
import Image from "next/image";

interface WhyPageProperties {
}

function WhyContentComponent(properties: PropsWithChildren<WhyPageProperties>):ReactElement{

  const contentWhy = <div className="flex flex-row justify-center text-center w-ful p-8 min-h-[250px]">
    <ul className="h-min w-full list-none leading-[50px] text-primary text-2xl font-extralight">
      <li className="text-2xl font-light opacity-80 mb-4">Why Veew?</li>

      <li className="opacity-70">Existing systems are built without family and relationship as the
        <span className="font-bold"> foundation</span></li>
      <li className="opacity-70">Asset data is <span className="font-bold">retrofitted</span> for the family in the name of reports</li>
      <li className="opacity-70">Ownership structure is locked with providers reducing flexibility</li>
    </ul>
  </div>;

  const contentFragmentation = <div className="flex flex-row justify-center text-center w-ful p-8 bg-primary min-h-[400px]">
    <ul className="h-min w-full list-none leading-[50px] text-white text-xl font-extralight">
      <li className="text-2xl font-light opacity-80">Fragmentation</li>
      <li className="font-normal mt-8">Today&apos;s Ultra High Net-Worth Families:</li>
      <li className="opacity-50 text-2xl mt-4">Have a dynamic and adaptive lifestyle</li>
      <li className="opacity-50 text-2xl mt-4">They are creative in Investment and Philanthropy</li>
      <li className="opacity-50 text-2xl mt-4">They are often Multi-Generation and Multi-Household</li>
      <li className="mt-12 flex flex-row justify-center w-full">
        <Image width={500} height={100} src='/images/generation.svg' alt="-" />
      </li>
    </ul>
  </div>;

  const contentFragmentComment = <div className="flex flex-row w-full justify-center mt-8 mb-8">
    <div className="text-4xl text-center leading-[60px] font-extralight text-primary opacity-70 w-[550px]">
      Lack of a Unified Platform causes <span className="font-bold">fragmentation</span> across generations
    </div>
  </div>

  const contentCost = <div className="flex flex-rows justify-center text-center w-ful p-8 bg-alternate min-h-[300px]">
    <ul className="h-min w-full list-none leading-[50px]
                                                text-white text-xl font-extralight">
      <li className="text-2xl font-light opacity-80 mb-8">High Cost Of Ownership</li>
      <li className="opacity-50 text-2xl mt-4">As <span className="font-bold">families expand</span> their needs,
        they face integration challenges with <span className="font-bold">external services</span></li>
      <li className="opacity-50 text-2xl mt-4">Every change or initiative is <span className="font-bold">increasingly expensive</span></li>
      <li className="opacity-50 text-2xl mt-4">This leads to slow adoption of latest technology</li>
    </ul>
  </div>;

  const contentCostComment = <div className="flex flex-row w-full justify-center mt-8 mb-8">
    <div className="text-4xl text-center leading-[60px] font-extralight text-primary opacity-70 w-[550px]">
      If <span className="font-bold">family structure</span> is not readily available or publishable, integration is challenging
    </div>
  </div>

  const contentPrivacy = <div className="flex flex-rows justify-center text-center w-ful p-8 bg-alternate min-h-[300px]">
    <ul className="h-min w-full list-none leading-[50px]
                                                text-white text-xl font-extralight">
      <li className="text-2xl font-light opacity-80 mb-8">Privacy</li>
      <li className="opacity-50 text-2xl mt-4">Privacy is paramount but often <span className="font-bold">not well defined</span></li>
      <li className="opacity-50 text-2xl mt-4">Privacy becomes a <span className="font-bold">bottleneck for flexibility</span></li>
    </ul>
  </div>;


  return <div className="scroll-auto h-screen">
    <PublicPageHeader isCompact={true}> </PublicPageHeader>
    {contentWhy}
    {contentFragmentation}
    {contentFragmentComment}
    {contentCost}
    {contentCostComment}
    {contentPrivacy}
  </div>
}

export default WhyContentComponent;
