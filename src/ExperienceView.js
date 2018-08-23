import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ExperienceSection = styled.div``;

class ExperienceView extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      text: "anime"
    };

    this.getExperience = this.getExperience.bind(this);
  }

  getExperience() {
    return this.props.candidateExperience.map(position => {
      return (
        <React.Fragment>
          <ExperienceSection>
            {position.company + " - " + position.location}
          </ExperienceSection>
          <ExperienceSection>{position.position}</ExperienceSection>
          <ExperienceSection>{position.duration}</ExperienceSection>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <Container
        onClick={() => {
          this.props.cbChangeView("overview");
        }}
      >
        {this.getExperience()}
      </Container>
    );
  }
}

export default ExperienceView;
