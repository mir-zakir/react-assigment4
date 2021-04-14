import React, { useState } from "react";
import { connect } from "react-redux";
import { addSkills, removeSkills } from "../actions";

function Skills(props) {
  const isShow = false;
  const initialSkills = {
    skillName: "",
    rating: 0,
  };

  const [skill, setSkill] = useState(initialSkills);
  const onSubmitData = (e) => {
    e.preventDefault();
    props.addSkills({ skill });

    setSkill(initialSkills);
  };
  const removeSkills = (skill) => {
    props.removeSkills({ skill });

  };
  const renderSkills = props.skills.map((skill) => {
    return (
      <div className='item' key={skill.skillName}>
        <div className='content'>
          <h4 className='header'>{skill.skillName}</h4>
          <div className='description'>
            <p>Rating : {skill.rating} / 10</p>
          </div>
        </div>
        <div>
          <button
            type='button'
            className='ui button red'
            onClick={() => {
              removeSkills(skill);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <form className='ui form' onSubmit={onSubmitData}>
        {!isShow && (
          <React.Fragment>
            <div className='field'>
              <label>Skill / Technology Name</label>
              <input
                type='text'
                value={skill.skillName}
                placeholder='Enter skill / technology name'
                onChange={(e) => {
                  setSkill({
                    ...skill,
                    skillName: e.target.value,
                  });
                }}
              />
            </div>
            <div className='field'>
              <label>Rating out of 10</label>
              <input
                type='number'
                value={skill.rating}
                placeholder='Rating out of 10'
                onChange={(e) => {
                  setSkill({
                    ...skill,
                    rating: e.target.value,
                  });
                }}
              />
            </div>

            <button className='ui button primary' type='submit'>
              Submit
            </button>
          </React.Fragment>
        )}
      </form>

      <div className='ui items'>{renderSkills}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { skills: state.profile.skills };
};
export default connect(mapStateToProps, { addSkills, removeSkills })(Skills);
