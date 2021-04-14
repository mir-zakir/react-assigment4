import React, { useState } from "react";
import { connect } from "react-redux";
import DropDownUI from "./DropDownUI";
import { addWorkExperience, removeWorkExperience } from "../actions";
function WorkExperience(props) {
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
  const initialWorkExperience = {
    jobTitle: "",
    company: "",
    location: "",
    fromMonth: monthOptions[0].value,
    fromYear: yearOptions[0].value,
    toMonth: monthOptions[0].value,
    toYear: yearOptions[0].value,
  };

  const [workExperience, setWorkExperience] = useState(initialWorkExperience);

  const onSubmitData = (e) => {
    e.preventDefault();
    props.addWorkExperience({ workExperience });
    setWorkExperience(initialWorkExperience);
  };

  const removeWorkExperience = (workExperience) => {
    props.removeWorkExperience({ workExperience });
  };

  const renderWorkExperienceList = props.workExperienceList.map(
    (workExperienceItem, index) => {
      return (
        <div className='item' key={index}>
          <div className='content'>
            <h4 className='header'>{workExperienceItem.jobTitle}</h4>
            <div className='description'>
              <p>{workExperienceItem.company}</p>
              <p>{workExperienceItem.location}</p>
              <p>{`${workExperienceItem.fromMonth} ${workExperienceItem.fromYear} ${workExperienceItem.toMonth} ${workExperienceItem.toYear}`}</p>
            </div>
          </div>
          <div>
            <button
              type='button'
              className='ui button red'
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
      <form className='ui form' onSubmit={onSubmitData}>

        {!isShow && (
          <React.Fragment>
            <div className='field'>
              <label>Job title</label>
              <input
                type='text'
                placeholder='job title'
                value={workExperience.jobTitle}
                onChange={(e) => {
                  setWorkExperience({
                    ...workExperience,
                    jobTitle: e.target.value,
                  });
                }}
              />
            </div>
            <div className='field'>
              <label>Company</label>
              <input
                type='text'
                placeholder='Company'
                value={workExperience.company}
                onChange={(e) => {
                  setWorkExperience({
                    ...workExperience,
                    company: e.target.value,
                  });
                }}
              />
            </div>
            <div className='field'>
              <label>Location</label>
              <input
                type='text'
                placeholder='Location'
                value={workExperience.location}
                onChange={(e) => {
                  setWorkExperience({
                    ...workExperience,
                    location: e.target.value,
                  });
                }}
              />
            </div>
            <div className='field'>
              <div className='eight wide field'>
                <label>From</label>
                <div className='two fields'>
                  <DropDownUI
                    value={workExperience?.fromMonth}
                    options={monthOptions}
                    onChange={(e) => {
                      setWorkExperience({
                        ...workExperience,
                        fromMonth: e.target.value,
                      });
                    }}
                  />

                  <DropDownUI
                    value={workExperience?.fromYear}
                    options={yearOptions}
                    onChange={(e) => {
                      setWorkExperience({
                        ...workExperience,
                        fromYear: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='eight wide field'>
              <label>To</label>
              <div className='two fields'>
                <DropDownUI
                  value={workExperience?.toMonth}
                  options={monthOptions}
                  onChange={(e) => {
                    setWorkExperience({
                      ...workExperience,
                      toMonth: e.target.value,
                    });
                  }}
                />
                <DropDownUI
                  value={workExperience?.toYear}
                  options={yearOptions}
                  onChange={(e) => {
                    setWorkExperience({
                      ...workExperience,
                      toYear: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <button className='ui button primary' type='submit'>
              Submit
            </button>
          </React.Fragment>
        )}
      </form>

      <div className='ui items'>{renderWorkExperienceList}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { workExperienceList: state.profile.workExperience };
};
export default connect(mapStateToProps, {
  addWorkExperience,
  removeWorkExperience,
})(WorkExperience);
