import React from "react";
import './Scroll.css'

export default class Scroll extends React.Component {
  onClickContainer = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  render() {
    return <div className="ddm-scroll" onClick={this.onClickContainer} {...this.props} />;
  }
}
