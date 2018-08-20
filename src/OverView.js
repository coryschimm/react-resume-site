import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Summary from "./Summary";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 450px;
`;

class OverView extends Component {
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
        <LeftContainer>
          <Summary />
        </LeftContainer> 
        <LeftContainer>
          Right
        </LeftContainer> 
      </Container>
    );
  }
}

export default OverView;
