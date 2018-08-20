import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import pic from './assets/profile.jpg'

const ProfileImage = styled.img`

`;

class Summary extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
    <div>
    <ProfileImage src={pic} height="124" width="124"/> <br/>
    Full Name <br/>
    Email <br/>
    Phone <br/>
    Website <br/>
    Adr Line 1 <br/>
    Adr Line 2 <br/>
    </div>);
  }
}

export default Summary;
