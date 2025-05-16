import React from "react";
import Image from "next/image";
import logo from "@/public/images/veew-logo-front.svg";
import logoSm from "@/public/images/veew-logo-front-sm.svg";

function PublicPageShowcase() {
  const leftSection = <ul className="mx-auto hidden md:block h-min list-none opacity-70 leading-[60px]">
    <li className="text-amber-400">Engagement platform built for</li>
    <li>Wealth Managers & RIAs</li>
    <li>Single / Multi-Family Offices</li>
    <li>Multi-generation Families</li>
  </ul>;

  const rightSection = <ul className="mx-auto hidden md:block h-min list-none opacity-70 leading-[60px]">
    <li className="text-amber-400">Private space for your</li>
    <li>Assets</li>
    <li>Relationships</li>
    <li>Contents</li>
    <li>Communications</li>
  </ul>;

  const leftSectionMobile = <ul className="mx-auto h-min list-none opacity-70 leading-8 w-[300px]">
    <li className="text-amber-400">Engagement platform built for</li>
    <li>UHN Clients, Family Office, Advisors & RIAs</li>
  </ul>;

  const rightSectionMobile = <ul className="mx-auto h-min list-none opacity-70 leading-8 w-[300px]">
    <li className="text-amber-400">Private space for your</li>
    <li>Assets, Relationships, Content & Communication</li>
  </ul>;

  // const centerImage = <Image src={logo} className="mx-auto" width={400} height={400}  alt="Veew"/>;
  // const centerImage = <Image src={logo} className="mx-auto hidden md:block w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96"
  //                            alt="Veew"/>;

  const centerImage = <div className="flex flex-col items-center justify-center mt-[140px]">
    <Image className="md:mt-[-100px]  mt-[-20px]" width={620} height={580} src='/images/veew-web-app.svg' alt="-" />
    <Image className="md:mt-[-170px] mt-[-20px] md:ml-[160px] " width={620} height={480} src='/images/veew-mockup-flat.svg' alt="-" />
  </div>

  // const centerImageSm = <Image src={logoSm} className="mx-auto w-100 h-100"   alt="Veew"/>;

  const centerImageSm = <div className="flex flex-col items-center justify-center mt-[40px]">
    <Image className="mt-[-20px]" width={420} height={380} src='/images/veew-web-app.svg' alt="-" />
    <Image className="mt-[-110px] ml-[80px]" width={420} height={380} src='/images/veew-mockup-flat.svg' alt="-" />
  </div>


  const mdView = <div className="hidden md:block">
    <div className="flex flex-row justify-center items-center mx-auto max-h-[650px] pb-4
                         text-white text-lg font-xx-light md:font-thin
                         leading-[3rem] md:leading-[6rem] md:text-2xl
                         bg-cover bg-center bg-no-repeat bg-[url('../public/images/header-bottom-ex.jpg')]">
      {leftSection}
      {centerImage}
      {rightSection}
    </div>
  </div>

  const smView = <div className="md:hidden">
    <div className="flex flex-col items-center h-auto pb-12
                         text-white text-lg text-center font-xx-light
                         bg-cover bg-center bg-no-repeat
                         bg-[url('../public/images/header-bottom-ex.jpg')]">
      {centerImageSm}
      <div>{leftSectionMobile}</div>
      <div>{rightSectionMobile}</div>
    </div>
  </div>

  return <>
    {mdView}
    {smView}
  </>
}

export default PublicPageShowcase;
