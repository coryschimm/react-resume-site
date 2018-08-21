import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Summary from "./Summary";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid black;
  width: 100%;
  height: 100%;
`;

const NavButton = styled.div`
  width: 100%;
  background-color: green;
  height: 48px;
  :hover {
    background-color: skyblue;
  }
`;

const CanidateSummary = styled.p`
  padding-left: 16px;
  width: 380px;
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
        <NavButton />
      </Container>
    );
  }
}

export default Navigation;
