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
    console.log("canidateOverview", this.props.canidateInfo);
    return (
      <div>
        <ProfileImage src={pic} height="250" width="250" />
        <SummarySection>{this.props.canidateInfo.name}</SummarySection>
        <SummarySection> {this.props.canidateInfo.email}</SummarySection>
        <SummarySection>{this.props.canidateInfo.phone}</SummarySection>
        <SummarySection> {this.props.canidateInfo.website}</SummarySection>
        <SummarySection>
          {this.props.canidateInfo.location.addressLine1}
        </SummarySection>
        <SummarySection>
          {this.props.canidateInfo.location.addressLine2}
        </SummarySection>
      </div>
    );
  }
}

export default Summary;
