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
  }

  getEducationHighlights() {
    return this.props.canidateEducation.highlights.map(highlight => {
      console.log("SADASDSA", highlight);
      return <li>{highlight}</li>;
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
        <EducationSection>
          {this.props.canidateEducation.school +
            " - " +
            this.props.canidateEducation.location}
        </EducationSection>
        <EducationSection>
          {this.props.canidateEducation.degree}
        </EducationSection>
        <EducationSection>
          {this.props.canidateEducation.duration}
        </EducationSection>
        <EducationSection>
          {"Cumulative Grade Point Average: " +
            this.props.canidateEducation.gpa}
        </EducationSection>
        <ul>{this.getEducationHighlights()}</ul>
      </Container>
    );
  }
}

export default EducationView;
