import React from "react";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import { connect } from "react-redux";
import { ABOUT } from "../../../constants/actionTypes";
import "../Educations/certificates.scss";

const mapStateToProps = (state) => {
  return {
    aboutList: state.about.aboutData,
    aboutLoad: state.about.aboutLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  abouts: (value) => {
    agent.about
      .getabout()
      .then((response) =>
        dispatch({ type: ABOUT, payload: response.body })
      );
  },
});
class About extends React.Component {
  componentWillMount() {
    return this.props.abouts();
  }

  render() {
    if (this.props.aboutLoad) {
      return (
        <div className="certificate" id="education">
          {
            <div className="mainBlock">
              <h2>{this.props.aboutList.title}</h2>
              <p>{this.props.aboutList.description}</p>
            </div>
          }
        </div>
      );
    }

    return (
      <ul className="tag-list">
      </ul>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);
