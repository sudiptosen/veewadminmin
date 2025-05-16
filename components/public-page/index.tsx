import PublicPageHeader from "@/components/publicPageHeader";
import PublicPageShowcase from "@/components/publicPageShowcase";
import React, {useState} from "react";

import type {PropsWithChildren, ReactElement} from 'react';
import Image from "next/image";
import Link from "next/link";
import PressItem from "../press-item";
import VideoPopup from "@/components/video-popup";
import QRCode from "@/components/qr-code";
import { Separator } from "@/components/ui/separator";

interface PublicPageProperties {
  onContactUs: () => void;
}

function PublicHomeComponent(properties: PropsWithChildren<PublicPageProperties>):ReactElement{
  const {onContactUs} = properties;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const contentLaurelMd = <div className="hidden md:block">
    <div className="flex flex-row bg-white items-center justify-center gap-8 h-[240px]">
      <div
        className="flex flex-col justify-center items-center w-[200px] h-[200px]  bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-full mt-[-20px] opacity-50 font-medium">Family First</div>
      </div>
      <div
        className="flex flex-col justify-center items-center w-[200px] h-[200px]  bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-full mt-[-20px] opacity-50 font-medium">Privacy First</div>
      </div>
      <div
        className="flex flex-col justify-center items-center w-[200px] h-[200px]  bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-full mt-[-20px] opacity-50 font-medium max-w-[100px]">Family AI
          Agent Enabled
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center w-[200px] h-[200px]  bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-[100px] mt-[-20px] opacity-50 font-medium">#1 Engagement Platform
        </div>
      </div>
    </div>
  </div>

  const contentLaurelSm = <div className="md:hidden">
    <div className="flex flex-row flex-wrap bg-white items-center justify-center gap-2 text-sm h-auto">
      <div className="flex flex-col justify-center items-center w-[150px] h-[150px] bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-[100px] mt-[-20px] opacity-50 font-medium">Family First</div>
      </div>
      <div className="flex flex-col justify-center items-center w-[150px] h-[150px] bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-[100px] mt-[-20px] opacity-50 font-medium">Privacy First</div>
      </div>
      <div className="flex flex-col justify-center items-center w-[150px] h-[150px] bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-[100px] mt-[-20px] opacity-50 font-medium">Family AI Agent</div>
      </div>
      <div className="flex flex-col justify-center items-center w-[150px] h-[150px] bg-cover bg-center bg-no-repeat  bg-[url('../public/images/laurel.svg')]">
        <div className="text-center justify-center w-[100px] mt-[-20px] opacity-50 font-medium">#1 Engagement Platform
        </div>
      </div>
    </div>
  </div>

  const contentMission = <div className="flex flex-row flex-wrap bg-white items-center
                                                    justify-center md:gap-16 h-auto pt-8 md:pb-8 ">

    <div className="flex flex-col text-center md:max-w-[400px] w-[350px] p-2 md:p-0 md:gap-2">
      <div className="flex flex-row justify-center text-primary p-1 opacity-80 font-medium text-lg">
        <div className="mr-4">
          <Image width={24} height={24} src='/images/flag.svg' alt="-"/>
        </div>
        <div>Our Mission</div>
      </div>

      <div className="text-lg font-extralight leading-8 h-[100px] opacity-70">
        Enable families to realize true potential of unifying relationships and wealth.
      </div>
    </div>

    <div className="flex flex-col text-center md:max-w-[400px] w-[350px] p-4 md:p-0 md:gap-2">
      <div className="flex flex-row justify-center text-primary p-1 opacity-80 font-medium text-lg">
        <div className="mr-4 mt-[-2px]">
          <Image width={32} height={32} src='/images/sun.svg' alt="-"/>
        </div>
        <div>Our Process</div>
      </div>
      <div className="text-lg font-extralight leading-8 h-[100px]">
        Implement transparent and transformative processes with family enterprise as the foundation
      </div>
    </div>

    <div className="flex flex-col text-center md:max-w-[400px] w-[350px] p-4 md:p-0 md:gap-2">
      <div className="flex flex-row justify-center text-primary p-1 opacity-80 font-medium text-lg">
        <div className="mr-4">
          <Image width={32} height={32} src='/images/family1.svg' alt="-"/>
        </div>
        <div>Our Families</div>
      </div>

      <div className="text-lg font-extralight leading-8 h-[100px]">
        Open for growth and closed for privacy
      </div>
    </div>
  </div>

  const pageIds = ["7c1a96a0442d439d85d6cf001f08ecdd",
                   "dd6286b4d2404c908062e7fb2460f9fb",
                   "a302b9e6ddfb42349ac987468f5f3f04",
                   "5ddd6b2712ce45dfbc00d59ce409f719",
                   "d1d60a95403546a283baf8daa7336f78"];

  const articles = <div id="press" className="flex flex-col bg-white pt-6">
    <div className="flex flex-row justify-center text-primary p-1 opacity-80 font-medium text-lg pt-6">
      <div className="mr-4 mt-[-16px]">
        <Image width={52} height={52} src='/images/bulb-mind.svg' alt="-"/>
      </div>
      <div>Learn More</div>
    </div>

    <div className="flex flex-row flex-wrap items-center text-center justify-center md:gap-16 h-auto pt-8 md:pb-8 ">
      <PressItem logo={"/images/lamp.svg"} title={"Family First"} text={"The modern service delivery model"}
                 pageId={pageIds[0]}></PressItem>
      <PressItem logo={"/images/lamp.svg"} title={"Your Legacy, Your Way, Everywhere"}
                 text={"Next step for your SFO, MFO"} pageId={pageIds[1]}></PressItem>
      <PressItem logo={"/images/lamp.svg"} title={"Own Your Family"} text={"Learn what it really means"}
                 pageId={pageIds[2]}></PressItem>
      <PressItem logo={"/images/lamp.svg"} title={"The Veew Formula"} text={"What makes it different"}
                 pageId={pageIds[3]}></PressItem>
      <PressItem logo={"/images/lamp.svg"} title={"Engagement Is Everything"} text={"It's all about that!"}
                 pageId={pageIds[4]}></PressItem>
    </div>
  </div>

  const contentWhy = (
    <div className="w-full bg-primary py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.02] -top-1/4 -left-1/4 animate-circle-1"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.02] -bottom-1/4 -right-1/4 animate-circle-2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/[0.02] top-1/2 left-1/2 animate-circle-3"></div>
      </div>
      
      {/* Existing Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* WHY VEEW Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">WHY VEEW</h2>
            <Separator className="bg-white/20 w-1/4" />
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                </div>
                <p className="text-white/90 text-lg">
                  Ultra High Net-Worth (<span className="font-bold">UNH</span>) clients and families
                  deserve a <span className="font-bold">Next Generation</span> platform
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                </div>
                <p className="text-white/90 text-lg">
                  A platform that is <span className="font-bold">Private</span>,
                  <span className="font-bold"> Flexible </span>and
                  <span className="font-bold"> Transformative</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                </div>
                <p className="text-white/90 text-lg">
                  A platform with <span className="font-bold">Ownership Structure</span> and <span
                  className="font-bold">Relationships</span> as the <span
                  className="font-bold">foundation</span>
                </p>
              </div>
            </div>
          </div>

          {/* VEEW ENABLES Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">VEEW ENABLES</h2>
            <Separator className="bg-white/20 w-1/4" />
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                </div>
                <p className="text-white/90 text-lg">
                  A modern, flexible and <span className="font-bold">always connected</span> experience
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white/10 p-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                </div>
                <p className="text-white/90 text-lg">
                  Private platform for the <span className="font-bold">Family</span>,
                  <span className="font-bold"> Advisors</span> and their
                  <span className="font-bold"> Assets</span>
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href='/docs/why/#top' scroll={true}
                    className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors">
                <span>Learn More</span>
                <Image width={18} height={18} src='/images/right-arrow.svg' alt="→" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const contentHow = <div className="flex flex-rows justify-center text-center w-ful p-8 bg-alternate min-h-[600px]">
    <ul className="h-min w-full list-none leading-[80px] text-white text-xl font-extralight">
      <li className="opacity-100 font-bold mt-4">HOW IT WORKS</li>

      <li className="opacity-50">
        Map <span className="font-bold">Assets</span> with ownership and relationship
      </li>
      <li className="opacity-50"><span className="font-bold">Enable API</span> for every family, assets and advisors
      </li>
      <li className="opacity-50"><span className="font-bold">Mobile</span> and <span className="font-bold">Web Admin </span> app for advisors, family members and
        all service providers
      </li>

      <li className="opacity-100 font-bold mt-4">OPEN FAMILY SETUP</li>
      <li className="opacity-50">In Veew, family structure is the <span className="font-bold">foundation</span> for
        privacy and
        user experience
      </li>
      <li className="opacity-50"><span className="font-bold">Family owned API </span> ready for all <span
        className="font-bold">Fintech Solutions </span></li>

      <li>
        <Link href='/docs/how/#top'
              className="flex flex-row justify-end gap-2 w-full text-right opacity-50 cursor-pointer">
          <div className="text-amber-300">Learn More</div>
          <Image width={18} height={18} src='/images/right-arrow.svg' alt="-"/>
        </Link>
      </li>
    </ul>
  </div>;

  const contentProducts = <div className="flex flex-row bg-white items-center justify-center w-full">
    <Image className="mt-[-60px]" width={400} height={500} src='/images/footer-left.svg' alt="-" />
    <Image className="mt-[-100px]" width={700} height={500} src='/images/footer-right.svg' alt="-" />
  </div>

  function updateVideoStatus(val: boolean) {
    setIsVideoOpen(val);
  }

  const videos = <div id="videos" className="flex flex-col bg-white pt-2 lg:pt-6">
    <div className="flex flex-row justify-center text-primary p-1 opacity-80 font-medium text-lg pt-6">
      <div className="mr-4 mt-[-16px]">
        <Image width={52} height={52} src='/images/video.svg' alt="-"/>
      </div>
      <div className="mt-[-4px]">See It In Action</div>
    </div>

    <div className="flex flex-row flex-wrap items-center text-center justify-center gap-2 md:gap-16 h-auto pt-8 md:pb-8 ">
      <VideoPopup updateOpenStatus={updateVideoStatus} currentStatus={isVideoOpen} imgUrl="/images/vid1.svg"
                  vidUrl="https://firebasestorage.googleapis.com/v0/b/veew-dev.appspot.com/o/videos%2Fwelcome.mp4?alt=media&token=fc0a2839-bb74-4a02-8466-01aad8eaa551"></VideoPopup>
      <VideoPopup updateOpenStatus={updateVideoStatus} currentStatus={isVideoOpen} imgUrl="/images/vid2.svg"
                  vidUrl="https://firebasestorage.googleapis.com/v0/b/veew-dev.appspot.com/o/videos%2Fprivate.mp4?alt=media&token=ede3ae9a-e273-465b-81e9-2c1430a370e3"></VideoPopup>
      <VideoPopup updateOpenStatus={updateVideoStatus} currentStatus={isVideoOpen} imgUrl="/images/vid3.svg"
                  vidUrl="https://firebasestorage.googleapis.com/v0/b/veew-dev.appspot.com/o/videos%2Fassets.mp4?alt=media&token=1fbdc1cc-4679-4325-96d8-64a480fb4ecf"></VideoPopup>
      <VideoPopup updateOpenStatus={updateVideoStatus} currentStatus={isVideoOpen} imgUrl="/images/vid4.svg"
                  vidUrl="https://firebasestorage.googleapis.com/v0/b/veew-dev.appspot.com/o/videos%2Fgroups.mp4?alt=media&token=0aaac56e-425a-4bbe-a3d9-17dec19834a3"></VideoPopup>
    </div>
  </div>

  const defaultView = <div className="scroll-auto h-screen gap-2">
    <PublicPageHeader onContactUs={onContactUs}></PublicPageHeader>
    <PublicPageShowcase></PublicPageShowcase>
    {contentLaurelMd}
    {contentLaurelSm}
    {/*<div className="text-amber-400 h-60">*/}
    {/*  <QRCode></QRCode>*/}
    {/*</div>*/}
    {contentWhy}
    {contentMission}
    {videos}
    {articles}
    {contentHow}
    {contentProducts}
  </div>;

  return defaultView;
}

export default PublicHomeComponent;
