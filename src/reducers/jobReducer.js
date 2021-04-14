import Jobs from "../jobs.json";

export const selectedJobReducer = (selectedJob = null, action) => {
  if (action.type === "SELECTED_JOB") {
    return action.payload;
  }

  return selectedJob;
};

export const fetchJobReducer = (jobs = [...Jobs], action) => {
  if (action.type === "FETCH_JOBS") {
    return action.payload;
  }

  return jobs;
};
