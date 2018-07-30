import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

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

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Fade = styled.div`
  display: inline-block;
  visibility: ${props => (props.out ? "hidden" : "visible")};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  height: 800px;
  width: 800px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      text: "anime"
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(text) {
    this.setState({
      visible: false
    });

    setTimeout(() => {
      this.setState({
        visible: true,
        text: text
      });
    }, 250);
  }

  render() {
    return (
      <Container
        onClick={() => {
          this.changeView("a");
        }}
      >
        <Fade title="aaa" out={!this.state.visible} start={0}>
          &lt;{this.state.text}&gt;
        </Fade>
      </Container>
    );
  }
}

export default App;
