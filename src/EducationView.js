import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding: 10px;
`;

const EducationSection = styled.div`
  padding-bottom: 10px;
`;

const HighlightList = styled.ul`
  margin: 0;
`;

const HighlightItem = styled.li`
  padding-bottom: 5px;
`;

const Back = styled.div`
  justify-self: flex-end;
  margin-top: auto;
  margin-bottom: 5%;
  height: 20px;
  cursor: pointer;
`;

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
      return <HighlightItem>{highlight}</HighlightItem>;
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
          <HighlightList>
            {this.getEducationHighlights(education)}
          </HighlightList>
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
        <Back>Back</Back>
      </Container>
    );
  }
}

export default EducationView;
