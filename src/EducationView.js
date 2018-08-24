import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const EducationSection = styled.div``;

class EducationView extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      text: "anime"
    };

    this.getEducationHighlights = this.getEducationHighlights.bind(this);
    this.getEducationHighlights = this.getEducationHighlights.bind(this);
  }

  getEducationHighlights(education) {
    console.log("><><>", education);
    return education.highlights.map(highlight => {
      console.log("SADASDSA", highlight);
      return <li>{highlight}</li>;
    });
  }

  getEducationSection() {
    return this.props.candidateEducation.map(education => {
      console.log("EDUCATION", education);
      return (
        <React.Fragment>
          <EducationSection>
            {education.school + " - " + education.location}
          </EducationSection>
          <EducationSection>{education.degree}</EducationSection>
          <EducationSection>{education.duration}</EducationSection>
          <EducationSection>
            {"Cumulative Grade Point Average: " + education.gpa}
          </EducationSection>
          <ul>{this.getEducationHighlights(education)}</ul>
        </React.Fragment>
      );
    });
  }

  //todo: make this pretty and handle more than 1 education
  render() {
    return (
      <Container
        onClick={() => {
          this.props.cbChangeView("overview");
        }}
      >
        {this.getEducationSection()}
      </Container>
    );
  }
}

export default EducationView;
