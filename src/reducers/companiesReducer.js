import companies from "./companies.json";

export const companiesReducer = () => {
  return companies;
};
export const selectedCompanyReducer = (selectedCompany = null, action) => {
  if (action.type === "SELECTED_COMPANY") {
    return action.payload;
  }

  return selectedCompany;
};
