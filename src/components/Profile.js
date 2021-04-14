import React, { Component } from "react";
import Accordion from "./Accordion";
import Education from "./Education";
import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

export class Profile extends Component {
  options = [
    { title: "Personal Information", content: <PersonalInformation /> },
    {
      title: "Work Experience",
      content: <WorkExperience />,
    },
    {
      title: "Education",
      content: <Education />,
    },
    {
      title: "Skills",
      content: <Skills />,
    },
  ];
  render() {
    return (
      <div className='ui grid'>
        <div className='sixteen wide column'>
          <Accordion items={this.options} />
        </div>
      </div>
    );
  }
}

export default Profile;
