import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const ExperienceSection = styled.div`
  padding-bottom: 10px;
`;

const HighlightList = styled.ul`
  margin: 0;
`;

const HighlightItem = styled.li`
  padding-bottom: 5px;
`;

class ExperienceView extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };

    this.getExperience = this.getExperience.bind(this);
    this.getPositionHighlights = this.getPositionHighlights.bind(this);
  }

  getPositionHighlights(highlights) {
    return highlights.map(highlight => {
      return <HighlightItem>{highlight}</HighlightItem>;
    });
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
          <HighlightList>
            {this.getPositionHighlights(position.highlights)}
          </HighlightList>
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
