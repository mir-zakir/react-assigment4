import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCompany } from "../actions";
import "../css/companyList.css";

export class CompanyList extends Component {
  renderCompanyList() {
    return this.props.companies?.map((company) => {
      return (
        <div
          key={company.id}
          className="ui massive label company__label"
          onClick={() => this.props.selectCompany(company)}
        >
          {company?.name}
        </div>
      );
    });
  }
  renderCompanyJobs() {
    return this.props.selectedCompany?.jobs?.map((job) => {
      return (
        <div
          className="card"
          style={{ marginLeft: "5px", width: "400px", minHeight: "300px" }}
        >
          <div className="content">
            <div className="center aligned header">{job.title}</div>
            <div className="center aligned description">
              <p>Job Type: {job.jobType}</p>
              <div class="ui blue labels">
                {job.locations?.map((city) => {
                  return (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a key='' className="ui pointing basic label">
                      {city}
                    </a>
                  );
                })}

                <h3 style={{ textAlign: "left", marginLeft: "10px" }}>
                  Requirements
                </h3>
                <div
                  style={{ textAlign: "left", marginLeft: "10px" }}
                  className="ui bulleted list"
                >
                  {job.requirements?.map((requirement) => {
                    return (
                      <div className="item" key={requirement}>
                        {requirement}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="extra content">
            <div className="center aligned author">
              <div className="salary" style={{ color: "blue" }}>
                Salary: {job.salary}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui grid">
        <div className="sixteen wide column" style={{ textAlign: "center" }}>
          {this.renderCompanyList()}
        </div>
        <div className="six wide column" style={{ textAlign: "center" }}>
          <h2>{this.props.selectedCompany?.name}</h2>
          <div className="ui cards">{this.renderCompanyJobs()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { companies: state.companies, selectedCompany: state.selectedCompany };
};
export default connect(mapStateToProps, { selectCompany })(CompanyList);
