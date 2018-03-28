import React from "react";
import Block from "dxc-flex";
import classNames from "classnames";
import CheckedSvg from "./CheckedSvg";

export default class MenuItem extends React.Component {
  render() {
    const { data, onClick, isActive } = this.props;
    const itemClass = classNames("dxc-ddm-item", {
      [`dxc-ddm-item-active`]: isActive
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
        {isActive ? <CheckedSvg className="dxc-ddm-item-active-icon" /> : null}
      </Block>
    );
  }
}
