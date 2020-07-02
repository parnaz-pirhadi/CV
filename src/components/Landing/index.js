import React from "react";
// import agent from '../../agent';
import { connect } from "react-redux";
import "./index.scss";
import Header from "./Header/Header";
import FirstLook from "./FirstLook/index";
import Experiences from "./Experiences/Experiences";
import Scientific from "./Scientific/Scientific";
import Educations from "./Educations/Educations";
import About from "./AboutMe/Aboutme";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Promise = global.Promise;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentWillMount() {
    // console.log("willmount------------------");
    // console.log("this.state.loading", this.state.loading);
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 1000);
    // console.log("this.state.loading", this.state.loading);
  }

  componentWillUnmount() {}

  render() {
    const { loading } = this.state.loading;
    return (
      <div>
        {/* <div className="sweet-loading">
          <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={loading}
          />
        </div> */}
        <Header />
        <FirstLook />
        <About />
        <Experiences />
        <Educations />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
