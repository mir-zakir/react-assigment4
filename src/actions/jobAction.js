// Action creator
export const selectJob = (job) => {
  // Return an action
  return {
    type: "SELECTED_JOB",
    payload: job,
  };
};
// Action creator
export const fetchJobs = (job) => {
  // Return an action
  return {
    type: "FETCH_JOBS",
    payload: job,
  };
};
