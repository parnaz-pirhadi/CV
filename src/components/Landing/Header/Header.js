import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import 'font-awesome/css/font-awesome.min.css';


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
          <li className="github">
            <a href="https://github.com/parnaz-pirhadi">
              <div className="socialMedia">
                <i className="fa fa-github"></i>
              </div>
            </a>
          </li>
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
