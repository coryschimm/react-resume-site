import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Summary from "./Summary";
import Navigation from "./Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
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
          <Summary candidateInfo={this.props.candidateOverview} />
        </LeftContainer>
        <LeftContainer>
          <Navigation
            cbChangeView={this.props.cbChangeView}
            candidateInfo={this.props.candidateOverview}
          />
        </LeftContainer>
      </Container>
    );
  }
}

export default OverView;
