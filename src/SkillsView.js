import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding: 10px;
`;

const SkillsSection = styled.div`
  line-height: 60px;
`;

const Back = styled.div`
  justify-self: flex-end;
  margin-top: auto;
  margin-bottom: 5%;
  height: 20px;
  cursor: pointer;
`;

class SkillsView extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      text: "anime"
    };

    this.getSkillsSections = this.getSkillsSections.bind(this);
    this.listSkills = this.listSkills.bind(this);
  }

  listSkills(highlights) {
    return highlights.map((gh, i) => {
      console.log("listSkills", gh, i);
      if (i === highlights.length - 1) {
        return <span>{gh}</span>;
      } else {
        return <span>{gh + ",   "}</span>;
      }
    });
  }

  getSkillsSections() {
    return this.props.candidateSkills.map(skillsSection => {
      return (
        <React.Fragment>
          <SkillsSection>
            {skillsSection.skillType + ": "}
            {this.listSkills(skillsSection.highlights)}
          </SkillsSection>
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
        {this.getSkillsSections()}
        <Back>Back</Back>
      </Container>
    );
  }
}

export default SkillsView;
