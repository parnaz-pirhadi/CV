import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="linkedin">
            <a href="http://linkedin.com/in/parnaz-pirhadi-28752783">
              <div className="socialMedia">
                <i className="icon-linkedin"></i>
              </div>
            </a>
          </li>
          {/* <li className="google-plus">
            <a href="#">
              <div className="socialMedia">
                <i className="icon-google-plus"></i>
              </div>
            </a>
          </li> */}
          <li className="email">
            <a href="#">
              <div className="socialMedia">
                <i className="icon-envelope "></i>
              </div>
              <span>pirhadi_parnaz@yahoo.com</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
