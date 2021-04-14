import React, { Component } from "react";
import { connect } from "react-redux";

class JobDetails extends Component {
  render() {
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ textAlign: "center", border: "1px solid gray" }}
      >
        <h2 className='ui header'>{this.props.selectedJob?.name}</h2>
        <h5>
          {this.props.selectedJob?.location?.city},
          {this.props.selectedJob?.location?.country}
        </h5>
        <img
          alt='logo'
          src={this.props.selectedJob?.logo}
          className='job-post-image'
        />
        <p>{this.props.selectedJob?.description}</p>
        <div className='salary'>{this.props.selectedJob?.salaryInString}</div>
        <div style={{ marginTop: "5px" }}>
          <button type='button' className='big ui blue button'>
            Apply Now
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { selectedJob: state.selectedJob };
};
export default connect(mapStateToProps, null)(JobDetails);
