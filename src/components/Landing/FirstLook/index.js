import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation/Navigation";
import "./firstLook.scss";
const Promise = global.Promise;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class FirstLook extends React.Component {
  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="firstLook">
        <img src="/images/parnaz.png"></img>
        <Navigation />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstLook);
