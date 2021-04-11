import React from "react";
import Box from "components/Box";
import EachBox from "components/EachBox";
import { Container, Paper } from "@material-ui/core";
import Label from "components/Label";

export default (props) => {
  return (
    <Container>
      <Label title="Resume" />
      <Paper style={{ marginTop: 12, padding: 12 }}>
        <Box title="Education">
          <EachBox
            name="NGUYEN HUE HIGH SCHOOL"
            position="Graduated"
            date="2011 - 2014"
          />
          <EachBox
            name="THANG LONG UNIVERSITY (TLU)"
            position="Computer Science and Technology Majors"
            date="2014 - ..."
          />
          <EachBox
            name="Code For Everyone Course (TECHKIDS)"
            position="Graduated"
            date="2017"
          />
        </Box>

        <Box title="ACTIVITIES">
          <EachBox
            name="MindX - Final Project Mentor"
            position="Mentor"
            date="Dec 2017 - Feb 2018"
          >
            <p>
              Consult and provide technical support for 30 students in total
              during 5 courses
            </p>
          </EachBox>
        </Box>

        <Box title="Work Experience">
          <EachBox
            name="Techkids"
            position="Front-end Developer"
            date="Dec 2017 - May 2019"
          >
            <div>
              <ul>
                <li>Teaching C4T course</li>
                <li>Build Learning Management System</li>
              </ul>
            </div>
          </EachBox>

          <EachBox
            name="Arillance Company"
            position="Front-end Developer"
            date="May 2019 - Present"
          >
            <div>
              <ul>
                <li>Responsible for Web Development </li>
              </ul>
            </div>
          </EachBox>
        </Box>

        <Box title="ADDITIONAL">
          <EachBox name="Languages & Technical">
            <ul>
              <li>Javascript (proficient) </li>
              <li>ReactJS (proficient)</li>
              <li>Python</li>
              <li>Git CLI</li>
              <li>NodeJS</li>
            </ul>
          </EachBox>
          <EachBox name="Certifications & Training">
            <ul>
              <li>Completed Code For Everyone (Techkids) Course</li>
              <li>Completed ReactJS and Redux on Udemy</li>
            </ul>
          </EachBox>
          <EachBox name="Other Skills">
            <ul>
              <li>Video Editing</li>
            </ul>
          </EachBox>
        </Box>
      </Paper>
    </Container>
  );
};
