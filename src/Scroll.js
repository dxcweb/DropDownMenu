import React from "react";

export default class Scroll extends React.Component {
  onClickContainer = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  render() {
    return <div className="dxc-ddm-scroll" onClick={this.onClickContainer} {...this.props} />;
  }
}
