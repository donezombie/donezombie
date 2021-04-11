import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DefaultLayout from "layout/DefaultLayout";
import ResumeSection from "components/Sections/ResumeSection";

const propTypes = {};

const Resume = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div style={{ padding: "3rem" }}>
        <ResumeSection />
      </div>
    </DefaultLayout>
  );
};

Resume.propTypes = propTypes;
export default Resume;
