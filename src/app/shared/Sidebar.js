import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/waterproof", state: "waterProofMenuOpen" },
      { path: "/waterproof/before", state: "waterProofBeforeMenuOpen" },
      { path: "/waterproof/after", state: "waterProofAfterMenuOpen" },
      { path: "/tiles", state: "tilesMenuOpen" },
      { path: "/tiles/kitchen", state: "tilesKitchenMenuOpen" },
      { path: "/tiles/bathroom", state: "tilesBathroomMenuOpen" },
      { path: "/tiles/ensuite", state: "tilesEnsuiteMenuOpen" },
      { path: "/tiles/laundry", state: "tilesLaundryMenuOpen" },
      { path: "/door-frame", state: "doorFrameMenuOpen" },
      { path: "/steel-frame", state: "steelFrameMenuOpen" },
      { path: "/hebel", state: "hebelMenuOpen" },
      { path: "/electrical", state: "electricalMenuOpen" },
      { path: "/plumbing", state: "plumbingMenuOpen" },
      { path: "/air-condition", state: "AcPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li
            className={
              this.isPathActive("/dashboard")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/waterproof")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.waterProofMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("waterProofMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">
                <Trans>Water proof</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.waterProofMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/waterproof/before")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/waterproof/before"
                    >
                      <Trans>Before</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/waterproof/after")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/waterproof/after"
                    >
                      <Trans>After</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/tiles")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <div
              className={
                this.state.tilesMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("tilesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">
                <Trans>Tile</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.tilesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tiles/kitchen")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tiles/kitchen"
                    >
                      <Trans>Kitchen</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tiles/ensuite")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tiles/ensuite"
                    >
                      <Trans>Ensuite</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tiles/bathroom")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tiles/bathroom"
                    >
                      <Trans>Bathroom</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tiles/laundry")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tiles/laundry"
                    >
                      <Trans>Laundry</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/door-frame")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/door-frame">
              <span className="menu-icon">
                <i className="mdi mdi-door"></i>
              </span>
              <span className="menu-title">
                <Trans>Door frame</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/steel-frame")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/steel-frame">
              <span className="menu-icon">
                <i className="mdi mdi-poll"></i>
              </span>
              <span className="menu-title">
                <Trans>Steel frame</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/hebel")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/hebel">
              <span className="menu-icon">
                <i className="mdi mdi-wall"></i>
              </span>
              <span className="menu-title">
                <Trans>Hebel</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/electrical")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/electrical">
              <span className="menu-icon">
                <i className="mdi mdi-ceiling-light"></i>
              </span>
              <span className="menu-title">
                <Trans>Electrical</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/plumbing")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/plumbing">
              <span className="menu-icon">
                <i className="mdi mdi-ceiling-light"></i>
              </span>
              <span className="menu-title">
                <Trans>Plumbing</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/air-condition")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/air-condition">
              <span className="menu-icon">
                <i className="mdi mdi-ceiling-light"></i>
              </span>
              <span className="menu-title">
                <Trans>Air condition</Trans>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
