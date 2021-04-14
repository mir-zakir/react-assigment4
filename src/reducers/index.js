import { combineReducers } from "redux";
import { companiesReducer, selectedCompanyReducer } from "./companiesReducer";
import { fetchJobReducer, selectedJobReducer } from "./jobReducer";
import { profileReducer } from "./profileReducer";

export default combineReducers({
  companies: companiesReducer,
  selectedCompany: selectedCompanyReducer,
  jobs: fetchJobReducer,
  selectedJob: selectedJobReducer,
  profile: profileReducer,
});
