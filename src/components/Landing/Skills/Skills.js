import React from "react";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import { connect } from "react-redux";
import { SKILLS } from "../../../constants/actionTypes";
import "./skills.scss";

const mapStateToProps = (state) => {
  return {
    skillsList: state.skills.skillsData,
    skillsLoad: state.skills.skillsLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  skills: (value) => {
    agent.skills
      .getskills()
      .then((response) => dispatch({ type: SKILLS, payload: response.body }));
  },
});
class Skills extends React.Component {
  componentWillMount() {
    return this.props.skills();
  }

  render() {
    if (this.props.skillsLoad) {
      return (
        <div className="skills" id="skills">
          <div className="mainBlock">
            <h2>{this.props.skillsList.title}</h2>
          </div>

          <div className="skillList">
            {this.props.skillsList.skills.map((item, index) => {
              return (
                <div key={index} className="skillItem">
                  {item.data.map((detail, index) => {
                    return (
                      <div key={index} className="item">
                        <div className="title">
                          <span>{detail.title}</span>
                        </div>
                        {/* <div className="star">
                          {detail.fullStar.map((fullStar, index) => {
                            return (
                              <i key={index} className={"icon-star-full"}></i>
                            );
                          })}

                          {detail.halfStar > 0 && (
                            <i className={"icon-star-half"}></i>
                          )}
                        </div> */}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <ul className="tag-list">
      </ul>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Skills);
