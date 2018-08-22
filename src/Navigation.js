import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid black;
  width: 100%;
  height: 100%;
`;

const NavButton = styled.div`
  width: 100%;
  border-top: 1px solid black;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 5px;
  :hover {
    background-color: skyblue;
  }
`;

const CanidateSummary = styled.p`
  padding-left: 16px;
  width: 380px;
`;

const NavButtonContainer = styled.div`
  margin-top: auto;
`;

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      text: "anime"
    };
  }

  render() {
    return (
      <Container>
        <CanidateSummary> {this.props.canidateInfo.summary} </CanidateSummary>
        <NavButtonContainer>
          <NavButton
            onClick={() => {
              this.props.cbChangeView("experience");
            }}
          >
            Experience
          </NavButton>
          <NavButton
            onClick={() => {
              this.props.cbChangeView("skills");
            }}
          >
            Skills
          </NavButton>
          <NavButton
            onClick={() => {
              this.props.cbChangeView("education");
            }}
          >
            Education
          </NavButton>
        </NavButtonContainer>
      </Container>
    );
  }
}

export default Navigation;
