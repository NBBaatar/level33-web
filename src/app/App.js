import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import Footer from "./shared/Footer";
import Login from "../app/examples/user-pages/Login";
import { withTranslation } from "react-i18next";

class App extends Component {
  state = {};
  componentDidMount() {
    this.onRouteChanged();
  }
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : "";
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : "";
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : "";
    return (
      <Router ref={(router) => (this.router = router)}>
        <Switch>
          <Route exact path="/" component={Login} />
          <div className="container-scroller">
            {sidebarComponent}
            <div className="container-fluid page-body-wrapper">
              {navbarComponent}
              <div className="main-panel">
                <div className="content-wrapper">
                  <AppRoutes />
                </div>
                {footerComponent}
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    const { i18n } = this.props;
    const body = document.querySelector("body");
    if (this.props.location.pathname === "/layout/RtlLayout") {
      body.classList.add("rtl");
      i18n.changeLanguage("mn");
    } else {
      body.classList.remove("rtl");
      i18n.changeLanguage("en");
    }
    window.scrollTo(0, 0);
  }
}
export default withTranslation()(withRouter(App));
