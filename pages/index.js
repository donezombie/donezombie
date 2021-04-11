import React from "react";
import useScrollProgressBar from "hooks/useScrollProgressBar";
import DefaultLayout from "layout/DefaultLayout";
import AboutmeSection from "components/Sections/AboutmeSection";
import WhatIDoSection from "components/Sections/WhatIDoSection";
import PortfolioSection from "components/Sections/PortfolioSection";

export default function Index() {
  useScrollProgressBar();

  return (
    <DefaultLayout>
      <AboutmeSection />
      <WhatIDoSection />
      <PortfolioSection />
    </DefaultLayout>
  );
}
