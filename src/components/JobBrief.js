import React, { Component } from "react";
import * as util from "./util/util";
export class JobBrief extends Component {
  state = {
    job: null,
    loading: false,
  };
  loaderStart() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
  }
  componentDidMount() {
    let { job } = this.props;
    this.setState({
      job: job,
    });

    this.loaderStart();
  }
  onClickJob = (event) => {
    this.props.onClick(this.state.job);
  };
  render() {
    return (
      <>
        <div
          style={{ textAlign: "left", padding: "5px" }}
          className='job-brief'
          onClick={this.onClickJob}
        >
          <h4>{this.props.job?.name}</h4>
          <h5>
            {this.props.job?.location?.city},{this.props.job?.location?.country}
          </h5>
          <img
            alt='logo'
            src={this.props.job?.logo}
            className='job-post-image'
          />
          <p>{this.props.job?.description}</p>
          <div className='salary'>
            Salary: {util.intToString(this.props.job?.salary)}
          </div>

          <hr />
        </div>
      </>
    );
  }
}

export default JobBrief;
