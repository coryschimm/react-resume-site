import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import OverView from "./OverView";

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
  background-color: whitesmoke;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
`;

const LeftContentArea = styled.div``;

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      text: "anime",
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
          text: text
        };
      });
    }, 250);
  }

  getView() {
    switch (this.state.view) {
      case "overview":
        return <OverView />;
        break;
    }
  }

  render() {
    return (
      <SiteContainer
        onClick={() => {
          this.changeView("a");
        }}
      >
        <ContentContainer title="aaa" out={this.state.visible}>
          {this.getView()}
        </ContentContainer>
      </SiteContainer>
    );
  }
}

export default App;
