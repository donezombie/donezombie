import React from "react";
import data from "data";
import { Container, Grid, Button, Box } from "@material-ui/core";
import {
  FiGithub,
  FiInstagram,
  FiCodepen,
  FiFacebook,
  FiUser,
  FiFileText,
  FiGitlab,
} from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const propTypes = {};

const AboutmeSection = (props) => {
  //! State
  const router = useRouter();

  //! Function

  //! Render
  return (
    <div className="about-me-section-container">
      <Container>
        <Grid container className="about-me-section" spacing={6}>
          <Grid xs={12} md={8} item className="about-me-section__info">
            <p className="about-me-section__name">{data.fullName}</p>
            <p className="about-me-section__position">{data.position}</p>
            <p className="about-me-section__desc">{data.descriptionPosition}</p>
            <Box mt={3}>
              <Button
                style={{ marginRight: 16 }}
                className="btn-primary"
                variant="contained"
                onClick={() => router.push("/project")}
              >
                <FiGitlab style={{ marginRight: 8 }} /> View portfolio
              </Button>
              <Button
                className="btn-secondary"
                variant="contained"
                onClick={() => router.push("/resume")}
              >
                <FiFileText style={{ marginRight: 8 }} /> View resume
              </Button>
            </Box>
          </Grid>
          <Grid xs={12} md={4} className="about-me-section__img">
            <img
              alt="img-about-me"
              src={data.imgAboutMe}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

AboutmeSection.propTypes = propTypes;
export default AboutmeSection;
