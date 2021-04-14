const initState = {
  profileInformation: {},
  workExperience: [],
  education: [],
  skills: [],
};

export const profileReducer = (state = initState, action) => {
  console.log("current action", action);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_PROFILEINFORMATION":
      state = {
        ...state,
        profileInformation: action.payload.profileInformation,
      };
      break;
    case "ADD_WORK_EXPERIENCE":
      state = {
        ...state,
        workExperience: [
          ...state.workExperience,
          action.payload.workExperience,
        ],
      };
      break;
    case "REMOVE_WORK_EXPERIENCE":
      state = {
        ...state,
        workExperience: [
          ...state.workExperience.filter(
            (f) => f.jobTitle !== action.payload.workExperience.jobTitle
          ),
        ],
      };
      break;
    case "ADD_EDUCATION":
      state = {
        ...state,
        education: [...state.education, action.payload.education],
      };
      break;
    case "REMOVE_EDUCATION":
      state = {
        ...state,
        education: [
          ...state.education.filter(
            (f) => f.degree !== action.payload.education.degree
          ),
        ],
      };
      break;

    case "ADD_SKILL":
      state = {
        ...state,
        skills: [...state.skills, action.payload.skill],
      };
      break;
    case "REMOVE_SKILL":
      state = {
        ...state,
        skills: [
          ...state.skills.filter(
            (f) => f.skillName !== action.payload.skill.skillName
          ),
        ],
      };
      break;
  }
  return state;
};
