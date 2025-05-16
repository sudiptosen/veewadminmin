import Head from "next/head";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

function IndexLayout(props : HomeLayoutProps) {
  return (
    <>
      <Head>
        <title>Veew</title>
        <meta name="description" content="Next Gen Family Engagement Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props.children}
      </main>
    </>
  );
}

export default IndexLayout;
