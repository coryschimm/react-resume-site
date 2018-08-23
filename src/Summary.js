import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import pic from "./assets/profile.jpg";

const ProfileImage = styled.img`
  border-radius: 20px;
  padding-bottom: 15px;
`;

const SummarySection = styled.div`
  padding-bottom: 10px;
`;

class Summary extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log("candidateOverview", this.props.candidateInfo);
    return (
      <div>
        <ProfileImage src={pic} height="250" width="250" />
        <SummarySection>{this.props.candidateInfo.name}</SummarySection>
        <SummarySection> {this.props.candidateInfo.email}</SummarySection>
        <SummarySection>{this.props.candidateInfo.phone}</SummarySection>
        <SummarySection> {this.props.candidateInfo.website}</SummarySection>
        <SummarySection>
          {this.props.candidateInfo.location.addressLine1}
        </SummarySection>
        <SummarySection>
          {this.props.candidateInfo.location.addressLine2}
        </SummarySection>
      </div>
    );
  }
}

export default Summary;
