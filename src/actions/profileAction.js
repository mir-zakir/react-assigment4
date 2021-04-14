// Action creator
export const addProfileInformation = (profileInformation) => {
  // Return an action
  return {
    type: "ADD_PROFILEINFORMATION",
    payload: profileInformation,
  };
};
// Action creator
export const addEducation = (education) => {
  // Return an action
  return {
    type: "ADD_EDUCATION",
    payload: education,
  };
};
export const removeEducation = (education) => {
  // Return an action
  return {
    type: "REMOVE_EDUCATION",
    payload: education,
  };
};
export const addWorkExperience = (workExperience) => {
  // Return an action
  return {
    type: "ADD_WORK_EXPERIENCE",
    payload: workExperience,
  };
};
export const removeWorkExperience = (workExperience) => {
  // Return an action
  return {
    type: "REMOVE_WORK_EXPERIENCE",
    payload: workExperience,
  };
};
export const addSkills = (skill) => {
  // Return an action
  return {
    type: "ADD_SKILL",
    payload: skill,
  };
};
export const removeSkills = (skill) => {
  // Return an action
  return {
    type: "REMOVE_SKILL",
    payload: skill,
  };
};
