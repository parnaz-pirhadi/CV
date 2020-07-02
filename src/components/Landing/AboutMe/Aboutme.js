import React from "react";
import agent from "../../../agent";
import { connect } from "react-redux";
import { ABOUT } from "../../../constants/actionTypes";
import "../Educations/certificates.scss";

const mapStateToProps = (state) => {
  return {
    aboutList: state.about.aboutData,
    aboutLoadLoad: state.about.aboutLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  about: (value) => {
    agent.about
      .getabout()
      .then((response) => dispatch({ type: ABOUT, payload: response.body }));
  },
});
class About extends React.Component {
  componentWillMount() {
    return this.props.about();
  }

  render() {
    if (this.props.aboutLoadLoad) {
      return (
        <div className="certificate" id="aboutme">
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
        <p>hyhiuu</p>
      </ul>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);
