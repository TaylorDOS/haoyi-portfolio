"use client";

import Head from "next/head";

export default function TravelLayout({ children }) {
  return (
    <>
      <Head>
        <title>Travel | Hao Yi</title>
        <meta
          name="description"
          content="Explore travel stories, itineraries, and destinations by Hao Yi."
        />
        <meta
          name="keywords"
          content="travel, Hao Yi, travel blog, itineraries, Japan travel, Korea travel, photo gallery"
        />
        <meta property="og:title" content="Travel | Hao Yi" />
        <meta
          property="og:description"
          content="Not just places, but stories. Dive into travel journals and destinations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haoyi-portfolio.com/travel" />
      </Head>
      {children}
    </>
  );
}