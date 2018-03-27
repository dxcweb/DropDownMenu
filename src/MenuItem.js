import React from "react";
import Block from "dxc-flex";
import classNames from "classnames";
import "./MenuItem.css";
import CheckedSvg from "./CheckedSvg";

export default class MenuItem extends React.Component {
  render() {
    const { data, onClick, isActive } = this.props;
    const itemClass = classNames("ddm-item", {
      [`ddm-item-active`]: isActive
    });
    return (
      <Block
        onClick={() => {
          onClick(data);
        }}
        vertical="center"
        className={itemClass}
      >
        <Block style={{ flex: 1 }}>{data.title}</Block>
        {isActive ? <CheckedSvg className="ddm-item-active-icon" /> : null}
      </Block>
    );
  }
}
