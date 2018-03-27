import React from "react";
import classNames from "classnames";
import "./Popdown.css";

export default class Popup extends React.Component {
  render() {
    const { isActive, children } = this.props;
    const optionClassName = classNames("dxc-drop-down-menu-popup", {
      "dxc-drop-down-menu-popup-active": isActive
    });
    return <div className={optionClassName}>{children}</div>;
  }
}
