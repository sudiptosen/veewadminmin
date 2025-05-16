import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter, Raleway} from "next/font/google";
import {NextPage} from "next";
import React, {ReactElement, ReactNode} from "react";
import {RecoilRoot} from "recoil";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font'
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--raleway-font'
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};


interface VeewAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function App(props: VeewAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <RecoilRoot>
      <main className={`${inter.variable}`}>
        {/* <ToastContainer /> */}
        {getLayout(<Component {...pageProps} />)}
      </main>
    </RecoilRoot>
  )
}
