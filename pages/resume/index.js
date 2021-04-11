import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DefaultLayout from "layout/DefaultLayout";
import ResumeSection from "components/Sections/ResumeSection";
import Head from "next/head";

const propTypes = {};

const Resume = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <Head>
        <title>Resume | Phạm Phú Quý Đôn</title>
        <meta
          name="description"
          content="CV, Resume, Portfolio Phạm Phú Quý Đôn"
        />
        <meta
          name="keywords"
          content="pham phu quy don, donezombie, DZB, dzb"
        />
      </Head>
      <div style={{ padding: "3rem" }}>
        <ResumeSection />
      </div>
    </DefaultLayout>
  );
};

Resume.propTypes = propTypes;
export default Resume;
