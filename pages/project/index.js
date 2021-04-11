import React from "react";
import DefaultLayout from "layout/DefaultLayout";
import PortfolioSection from "components/Sections/PortfolioSection";

const propTypes = {};

const Resume = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div style={{ paddingTop: "3rem" }}>
        <PortfolioSection />
      </div>
    </DefaultLayout>
  );
};

Resume.propTypes = propTypes;
export default Resume;
