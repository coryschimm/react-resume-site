import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import OverView from "./OverView";
import EducationView from "./EducationView";
import SkillsView from "./SkillsView";
import ExperienceView from "./ExperienceView";
import ResumeData from "./resume.json";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const SiteContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: inline-block;
  visibility: ${props => (props.out ? "hidden" : "visible")};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  height: 450px;
  width: 800px;
  overflow: hidden;
  background-color: white;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      view: "overview"
    };

    this.changeView = this.changeView.bind(this);
    this.getView = this.getView.bind(this);
  }

  changeView(text) {
    this.setState(() => {
      return { visible: true };
    });

    setTimeout(() => {
      this.setState(() => {
        return {
          visible: false,
          view: text
        };
      });
    }, 250);
  }

  getView() {
    switch (this.state.view) {
      case "education":
        return (
          <EducationView
            cbChangeView={this.changeView}
            candidateEducation={ResumeData.education}
          />
        );

      case "skills":
        return (
          <SkillsView
            cbChangeView={this.changeView}
            candidateSkills={ResumeData.skills}
          />
        );

      case "experience":
        return (
          <ExperienceView
            cbChangeView={this.changeView}
            candidateExperience={ResumeData.work}
          />
        );

      default:
        return (
          <OverView
            cbChangeView={this.changeView}
            candidateOverview={ResumeData.basics}
          />
        );
    }
  }

  render() {
    return (
      <SiteContainer
      // onClick={() => {
      //   this.changeView("education");
      // }}
      >
        <ContentContainer out={this.state.visible}>
          {this.getView()}
        </ContentContainer>
      </SiteContainer>
    );
  }
}

export default App;
