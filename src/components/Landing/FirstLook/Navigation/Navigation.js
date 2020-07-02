import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import agent from "../../../../agent";
import { connect } from "react-redux";
import { MENU } from "../../../../constants/actionTypes";

const mapStateToProps = (state) => {
  return {
    menuList: state.menu.menuData,
    menuLoad: state.menu.menuLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  menu: (value) => {
    agent.navigation
      .getMenu()
      .then((response) => dispatch({ type: MENU, payload: response.body }));
  },
});
class Navigation extends React.Component {
  componentWillMount() {
    return this.props.menu();
  }

  render() {
    if (this.props.menuLoad) {
      return (
        <Fragment>
          <ul className="nav-list">
            {this.props.menuList.map((item, index) => {
              return (
                <li key={index} className="tag-default tag-pill tag-outline">
                  <a href={item.route}> {item.name}</a>
                </li>
              );
            })}
          </ul>
        </Fragment>
      );
    }

    return <ul className="tag-list"></ul>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
