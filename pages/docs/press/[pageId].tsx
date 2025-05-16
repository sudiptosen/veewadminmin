import React, {PropsWithChildren, ReactElement, useEffect, useState} from 'react';
import {NotionPage} from "@/components/notionPage";
import notion from "@/lib/notion";
import {ExtendedRecordMap} from "notion-types";


import {rootNotionPageId} from "@/lib/config";
import PublicPageHeader from "@/components/publicPageHeader";

export const getStaticProps = async (context:any) => {
  const pageId = (context.params.pageId as string) || "7c1a96a0442d439d85d6cf001f08ecdd";
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

function PressContent({ recordMap }: { recordMap: ExtendedRecordMap }):ReactElement {
  return <div className="scroll-auto h-screen" id="top">
    <PublicPageHeader isCompact={true}> </PublicPageHeader>
    <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId}/>
  </div>

}

export default PressContent;
