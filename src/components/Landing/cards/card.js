import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="bookDetail">
          <div className="image">
            <img src={this.props.img} />
          </div>
          <span>{this.props.title}</span>

          <a className="bookLink">
            <i className="icon-left-arrow"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
