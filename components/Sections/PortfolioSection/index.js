import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import Label from "components/Label";
import CardCommon from "components/Card";
import data from "data";

const propTypes = {};

const PortfolioSection = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="portfolio-container">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Label title="Projects" />
          </Grid>

          {data.listPortfolio.map((el) => (
            <Grid key={el.id} item xs={12} md={12}>
              <CardCommon
                title={el.name}
                desc={el.describe}
                image={el.img}
                href={el.url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

PortfolioSection.propTypes = propTypes;
export default PortfolioSection;
