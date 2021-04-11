import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import Label from "components/Label";
import data from "data";

const propTypes = {};

const WhatIDoSection = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="what-i-do-container">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Label title="What I do" />
          </Grid>

          <Grid item xs={12} md={12}>
            <span className="sub-title-text">
              {data.descriptionWhatIDo}
            </span>
          </Grid>

          <Grid item xs={12} md={12}>
            {data.listTechnique.map((el) => (
              <div key={el.name} className="each-technique">
                <div className={`each-technique__icon ${el.className || ""}`}>
                  {el.icon}
                </div>
                <div className="each-technique__name">{el.name}</div>
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

WhatIDoSection.propTypes = propTypes;
export default WhatIDoSection;
