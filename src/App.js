import { Component } from "react";
import "./App.css";
import JobBriefList from "./components/JobBriefList";
import SearchBarForLocation from "./components/SearchBarForLocation";
import SearchBarForName from "./components/SearchBarForName";
import Jobs from "./jobs.json";

import Profile from "./components/Profile";
import Route from "./components/Route";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import CompanyList from "./components/CompanyList";
import { connect } from "react-redux";
import { fetchJobs, selectJob } from "./actions";

class App extends Component {
  state = { loading: false };
  filterByName = (e) => {
    console.log("filterbyname", e);
    this.props.fetchJobs(e);
    this.props.selectJob(null);
  };
  filterByLocation = (e) => {
    console.log("filter by locaiton", e);
    this.props.fetchJobs(e);
    this.props.selectJob(null);
  };
  loaderStart() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return (
      <>
        <div className='App ui container-fluid'>
          {this.state.loading && (
            <div style={{ height: "100vh" }}>
              <Loader />
            </div>
          )}
          {!this.state.loading && (
            <>
              <NavBar />
              <Route path={"/"}>
                <div className='ui grid'>
                  <div
                    className='sixteen wide column'
                    style={{ maxHeight: "15vh" }}
                  >
                    <div className='ui grid'>
                      <div className='six wide column'>
                        <SearchBarForName
                          jobs={Jobs}
                          onSearchBarForName={this.filterByName}
                        />
                      </div>
                      <div className='six wide column'>
                        <SearchBarForLocation
                          jobs={Jobs}
                          onSearchBarForLocation={this.filterByLocation}
                        />
                      </div>
                      <div
                        className='four wide column'
                        style={{ margin: "auto" }}
                      >
                      </div>
                    </div>
                  </div>
                  <div className='sixteen wide column'>
                    <JobBriefList
                    />
                  </div>
                </div>
              </Route>
              <Route path={"/profile"}>
                <Profile />
              </Route>
              <Route path={"/companies"}>
                <CompanyList />
              </Route>
            </>
          )}
        </div>
      </>
    );
  }
}
export default connect(null, { fetchJobs, selectJob })(App);
//export default App;
