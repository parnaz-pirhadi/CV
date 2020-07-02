import React from "react";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import { connect } from "react-redux";
import { EDUCATION } from "../../../constants/actionTypes";
import "./certificates.scss";
import History from "../History/History";

const mapStateToProps = (state) => {
  return {
    educationsist: state.educations.educationsData,
    educationsLoad: state.educations.educationsLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  educations: (value) => {
    agent.educations
      .getEducations()
      .then((response) =>
        dispatch({ type: EDUCATION, payload: response.body })
      );
  },
});
class Educations extends React.Component {
  componentWillMount() {
    return this.props.educations();
  }

  render() {
    if (this.props.educationsLoad) {
      return (
        <div className="certificate" id="education">
          {
            <div className="mainBlock">
              <h2>{this.props.educationsist.title}</h2>
              <p>{this.props.educationsist.description}</p>
            </div>
          }
        </div>
      );
    }

    return (
      <ul className="tag-list">
        <p>hyhiuu</p>
      </ul>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Educations);
