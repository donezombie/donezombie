import React from "react";
import DefaultLayout from "layout/DefaultLayout";
import PortfolioSection from "components/Sections/PortfolioSection";
import Head from "next/head";

const propTypes = {};

const Resume = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <Head>
        <title>Porfolio | Phạm Phú Quý Đôn</title>
        <meta
          name="description"
          content="CV, Resume, Portfolio Phạm Phú Quý Đôn"
        />
        <meta
          name="keywords"
          content="pham phu quy don, donezombie, DZB, dzb"
        />
      </Head>
      <div style={{ paddingTop: "3rem" }}>
        <PortfolioSection />
      </div>
    </DefaultLayout>
  );
};

Resume.propTypes = propTypes;
export default Resume;
