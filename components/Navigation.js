import React from "react";
import Link from "next/link";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuIsActive: false
    };
  }
  handleClick = () => {
    this.setState({
      mobileMenuIsActive: !this.state.mobileMenuIsActive
    });
  };
  handleLinkClick = () => {
    this.setState({
      mobileMenuIsActive: false
    });
  };
  render() {
    return (
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              {/* 
              <img src="/static/images/YOUR_LOGO.png" />
              */}
              <p className="app-name ">
                <strong>Site spinoziste</strong>
              </p>
            </a>
          </Link>
          <div
            className={
              this.state.mobileMenuIsActive
                ? "navbar-burger is-active"
                : "navbar-burger"
            }
            data-target="navMenu"
            onClick={this.handleClick}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className={
            this.state.mobileMenuIsActive
              ? "navbar-menu is-active"
              : "navbar-menu"
          }
          id="navMenu"
        >
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item" onClick={this.handleLinkClick}>
                Accueil
              </a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item" onClick={this.handleLinkClick}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
