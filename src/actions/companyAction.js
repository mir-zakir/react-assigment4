// Action creator
export const selectCompany = (company) => {
  // Return an action
  return {
    type: "SELECTED_COMPANY",
    payload: company,
  };
};
