import React from "react";
import { Link } from "react-router-dom";
import agent from "../../../agent";
import { connect } from "react-redux";
import { BOOK } from "../../../constants/actionTypes";
import Card from "../cards/card";
import "./books.scss";

const mapStateToProps = (state) => {
  return {
    booksList: state.books4.booksData,
    booksLoad: state.books4.booksLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  books5: (value) => {
    agent.books
      .getBooks()
      .then((response) => dispatch({ type: BOOK, payload: response.body }));
  },
});
class Books extends React.Component {
  componentWillMount() {
    return this.props.books5();
  }

  render() {
    if (this.props.booksLoad) {
      return (
        <div className="book">
          {
            <div className="mainBlock">
              <h2>{this.props.booksList.title}</h2>
              <p>{this.props.booksList.description}</p>
            </div>
          }

          <div className="bookList">
            {this.props.booksList.books.map((item) => {
              return <Card title={item.title} img={item.img} />;
            })}
          </div>
        </div>
      );
    }
    return <div className="certificate"></div>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
