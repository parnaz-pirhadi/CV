import React from "react";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import { connect } from "react-redux";
import "./history.scss";

class History extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: {} };
  }
  componentDidMount() {
    this.state.isOpen["i0i0"] = true;
    this.forceUpdate();
  }
  showOrHide = (index, parentIndex) => () => {
    if (!this.state.isOpen["i" + index + "i" + parentIndex + ""]) {
      this.state.isOpen["i" + index + "i" + parentIndex + ""] = true;
    } else {
      this.state.isOpen["i" + index + "i" + parentIndex + ""] = false;
    }
    this.forceUpdate();
  };
  render() {
    return (
      <div className="history-block">
        {this.props.data.map((item, parentIndex) => {
          return (
            <div key={parentIndex}>
              <p className="title">
                {" "}
                {item.title}

                <span className="line"></span>
              </p>
              {item.list.map((subData, index) => {
                return (
                  <div
                    key={index}
                    className="div"
                    onClick={this.showOrHide(index, parentIndex)}
                  >
                    <span
                      className={` ${
                        this.state.isOpen["i" + index + "i" + parentIndex + ""]
                          ? "option stroke"
                          : "option filled"
                      }`}
                      key={index}
                    ></span>
                    <label
                      className={` ${
                        this.state.isOpen["i" + index + "i" + parentIndex + ""]
                          ? "hide-title"
                          : "show-title"
                      }`}
                    >
                      {subData.subject}

                    </label>

                    <div
                      className={` ${
                        this.state.isOpen["i" + index + "i" + parentIndex + ""]
                          ? "detail  show"
                          : "detail hide"
                      }`}
                    >
                      <div className="detailText">

                        {subData.dataList.map((detail, index) => {
                          return <span key={index}>{detail.text}</span>;
                        })}

                      </div>
                      <div className="imageDetail">
                        <img className="img" src={subData.icon}></img>
                      </div>
                    </div>

                  </div>

                );
              })}
            </div>
          );

        })}
      </div>
    );
  }
}
export default History;
