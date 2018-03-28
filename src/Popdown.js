import React from "react";
import classNames from "classnames";

export default class Popup extends React.Component {
  render() {
    const { isActive, children } = this.props;
    const optionClassName = classNames("dxc-ddm-popup", {
      "dxc-ddm-popup-active": isActive
    });
    return <div className={optionClassName}>{children}</div>;
  }
}
