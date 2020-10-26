import React from "react";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import { connect } from "react-redux";
import { SCIENTIFIC } from "../../../constants/actionTypes";
import "./scientific.scss";
import History from "../History/History";

const mapStateToProps = (state) => {
  return {
    scientificList: state.scientific.scientificData,
    scientificLoad: state.scientific.scientificLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  scientific: (value) => {
    agent.scientific
      .getScientific()
      .then((response) =>
        dispatch({ type: SCIENTIFIC, payload: response.body })
      );
  },
});
class Scientific extends React.Component {
  componentWillMount() {
    return this.props.scientific();
  }

  render() {
    if (this.props.scientificLoad) {
      return (
        <div className="scientific">
          <div className="mainBlock">
            <h2>{this.props.scientificList.title}</h2>
            <p>{this.props.scientificList.description}</p>
          </div>

          <History data={this.props.scientificList.history} />
        </div>
      );
    }

    return (
      <ul className="tag-list">
      </ul>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scientific);
