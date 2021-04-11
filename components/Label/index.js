import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const Label = ({ title = "" }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="label-dzb">
      <span className="text">{title}</span>
    </div>
  );
};

Label.propTypes = propTypes;
export default Label;
