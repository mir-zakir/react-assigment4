import React, { useEffect, useState } from "react";

import JobBrief from "./JobBrief";
import JobDetails from "./JobDetails";
import Loader from "./Loader";
import { connect } from "react-redux";
import { selectJob } from "../actions";

const JobBriefList = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    props.selectJob(null);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);
  return (
    <div className='ui grid jobList'>
      <div
        className='five wide column '
        style={{
          marginTop: "8px",
          maxHeight: "80vh",
          minHeight: "400px",
          overflowY: "auto",
        }}
      >
        {loading && <Loader />}
        {!loading &&
          props.jobList.map((job, index) => (
            <JobBrief key={index} job={job} onClick={props.selectJob} />
          ))}
      </div>
      <div className='one wide column'></div>
      <div className='nine wide column'>
        {props.selectedJob && <JobDetails job={props.selectedJob} />}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { jobList: state.jobs, selectedJob: state.selectedJob };
};
export default connect(mapStateToProps, { selectJob })(JobBriefList);
