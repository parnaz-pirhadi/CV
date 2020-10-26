import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import Header from "./Header/Header";
import FirstLook from "./FirstLook/index";
import Experiences from "./Experiences/Experiences";
import Educations from "./Educations/Educations";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
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
        <Skills />
        <Experiences />
        <Educations />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
