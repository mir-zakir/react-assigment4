import React, { useState } from "react";
import { connect } from "react-redux";

import DropDownUI from "./DropDownUI";
import { addEducation, removeEducation } from "../actions";
function Education(props) {
  const getYearsOptions = () => {
    let options = [];

    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 2010; i--) {
      options.push({ label: i, value: i });
    }
    return options;
  };
  const isShow = false;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthOptions = months.map((m) => {
    return { label: m, value: m };
  });
  const yearOptions = getYearsOptions();
  const initialEducation = {
    degree: "",
    college: "",
    location: "",
    fromMonth: monthOptions[0].value,
    fromYear: yearOptions[0].value,
    toMonth: monthOptions[0].value,
    toYear: yearOptions[0].value,
  };

  const [education, setEducation] = useState(initialEducation);

  const onSubmitData = (e) => {
    e.preventDefault();
    props.addEducation({ education });

    setEducation(initialEducation);
  };
  const removeWorkExperience = (education) => {
    props.removeEducation({ education });
  };
  const renderWorkExperienceList = props?.educationList?.map(
    (workExperienceItem) => {
      return (
        <div className="item" key={workExperienceItem.degree}>
          <div className="content">
            <h4 className="header">{workExperienceItem.degree}</h4>
            <div className="description">
              <p>{workExperienceItem.college}</p>
              <p>{workExperienceItem.location}</p>
              <p>{`${workExperienceItem.fromMonth} ${workExperienceItem.fromYear} ${workExperienceItem.toMonth} ${workExperienceItem.toYear}`}</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="ui button red"
              onClick={() => {
                removeWorkExperience(workExperienceItem);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      );
    }
  );
  return (
    <div>
      <form className="ui form" onSubmit={onSubmitData}>

        {!isShow && (
          <React.Fragment>
            <div className="field">
              <label>Degree</label>
              <input
                type="text"
                placeholder="Degree"
                value={education?.degree}
                onChange={(e) => {
                  setEducation({
                    ...education,
                    degree: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>College</label>
              <input
                type="text"
                placeholder="College"
                value={education?.college}
                onChange={(e) => {
                  setEducation({
                    ...education,
                    college: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Location</label>
              <input
                type="text"
                placeholder="Location"
                value={education?.location}
                onChange={(e) => {
                  setEducation({
                    ...education,
                    location: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <div className="eight wide field">
                <label>From</label>
                <div className="two fields">
                  <DropDownUI
                    value={education?.fromMonth}
                    options={monthOptions}
                    onChange={(e) => {
                      setEducation({
                        ...education,
                        fromMonth: e.target.value,
                      });
                    }}
                  />
                  <DropDownUI
                    value={education?.fromYear}
                    options={yearOptions}
                    onChange={(e) => {
                      setEducation({
                        ...education,
                        fromYear: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="eight wide field">
              <label>To</label>
              <div className="two fields">
                <DropDownUI
                  value={education?.toMonth}
                  options={monthOptions}
                  onChange={(e) => {
                    setEducation({
                      ...education,
                      toMonth: e.target.value,
                    });
                  }}
                />
                <DropDownUI
                  value={education?.toYear}
                  options={yearOptions}
                  onChange={(e) => {
                    setEducation({
                      ...education,
                      toYear: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <button className="ui button primary" type="submit">
              Submit
            </button>
          </React.Fragment>
        )}
      </form>

      <div className="ui items">{renderWorkExperienceList}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "instate");
  return { educationList: state.profile.education };
};
export default connect(mapStateToProps, { addEducation, removeEducation })(
  Education
);
