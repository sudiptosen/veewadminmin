import Image from "next/image";
import logo from "@/public/images/veew-letter-logo.png";
import logoCircular  from "@/public/images/veew-logo-letter.svg";
import logofront from "@/public/images/veew-logo-letter.svg";
import React, {PropsWithChildren} from "react";
import Box from "@/components/box";
import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

interface PublicPageHeaderProps {
  onContactUs?: () => void;
  isCompact?: boolean;
}

function PublicPageHeader(props: PropsWithChildren<PublicPageHeaderProps>) {
  const {isCompact, onContactUs} = props;

  const fullView = <div className="bg-cover bg-center bg-no-repeat bg-[url('../public/images/header-top-ex.jpg')]">
    <div className="flex flex-row w-full justify-between items-center p-2">
      <div className="flex flex-row items-center">
        <Image className="hidden md:block" src={logoCircular} width={50} height={50} alt="Veew"/>
        <Image className="block md:hidden" src={logoCircular} width={30} height={30} alt="Veew"/>
        <Image className="hidden md:block" src={logo} width={112} height={50} alt="Veew"/>
        <Image className="md:hidden" src={logo} width={56} height={25} alt="Veew"/>
      </div>

      <div className="flex flex-row justify-between md:gap-6 gap-4 text-sm md:text-lg opacity-80">
        <div className="cursor-pointer text-white font-extralight decoration-1/2"
             onClick={onContactUs}>Contact Us
        </div>
      </div>

    </div>
  </div>;

  const compactView = <div className="bg-cover bg-center bg-no-repeat bg-[url('../public/images/header-top-ex.jpg')]">
    <Box widthStyle="w-full" flex="flex flex-row justify-between items-center" otherStyle="p-4">
      <Image className="hidden md:block" src={logo} width={112} height={50} alt="Veew"/>
      <Image className="md:hidden" src={logo} width={56} height={25} alt="Veew"/>

      <Image src={logofront} width={50} height={50} alt="Veew"/>
      <Link href="/" className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
        <GlobeAltIcon className="h-6 w-6 text-white" aria-hidden="true" />
      </Link>
    </Box>
  </div>

  return <>
    {isCompact && compactView}
    {!isCompact && fullView}
  </>
}

export default PublicPageHeader;
