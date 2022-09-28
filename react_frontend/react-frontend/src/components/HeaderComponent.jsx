import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mb-5">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://github.com/AladinHidri" className="navbar-brand">
                Employee Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
