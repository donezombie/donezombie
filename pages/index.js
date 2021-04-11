import React from "react";
import useScrollProgressBar from "./hooks/useScrollProgressBar";
import DefaultLayout from "layout/DefaultLayout";
import AboutmeSection from "components/Sections/AboutmeSection";
import WhatIDoSection from "components/Sections/WhatIDoSection";
import PortfolioSection from "components/Sections/PortfolioSection";
import Head from "next/head";

export default function Index() {
  useScrollProgressBar();

  return (
    <DefaultLayout>
      <Head>
        <title>Phạm Phú Quý Đôn</title>
        <meta name="description" content="CV, Resume, Portfolio Phạm Phú Quý Đôn" />
        <meta name="keywords" content="pham phu quy don, donezombie, DZB, dzb" />
      </Head>
      <AboutmeSection />
      <WhatIDoSection />
      <PortfolioSection />
    </DefaultLayout>
  );
}
