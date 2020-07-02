import React from "react";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import { connect } from "react-redux";
import { EXPERIENCE } from "../../../constants/actionTypes";
import "./experiences.scss";
import History from "../History/History";

const mapStateToProps = (state) => {
  return {
    experienceList: state.experience.experienceData,
    experienceLoad: state.experience.experienceLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  experience: (value) => {
    agent.experience
      .getExperience()
      .then((response) =>
        dispatch({ type: EXPERIENCE, payload: response.body })
      );
  },
});
class Experiences extends React.Component {
  componentWillMount() {
    return this.props.experience();
  }

  render() {
    if (this.props.experienceLoad) {
      return (
        <div className="exprience" id="experiences">
          <div className="mainBlock">
            <h2>{this.props.experienceList.title}</h2>
            {/* <p>{this.props.experienceList.description}</p> */}
          </div>

          <History data={this.props.experienceList.history} />
        </div>
      );
    }

    return <ul className="tag-list"></ul>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Experiences);
