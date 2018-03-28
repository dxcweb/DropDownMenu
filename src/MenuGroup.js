import React from "react";
import Block from "dxc-flex";
import classNames from "classnames";
import DownSvg from "./DownSvg";
export default class MenuGroup extends React.Component {
  render() {
    const { data, onClick, isActive, showIcon } = this.props;
    const itemClass = classNames("dxc-ddm-item-group", {
      "dxc-ddm-item-group-active": isActive
    });
    return (
      <Block
        onClick={() => {
          onClick(data);
        }}
        vertical="center"
        className={itemClass}
      >
        <Block horizontal="center" style={{ flex: 1 }}>
          {data.title}
        </Block>
        {showIcon ? <DownSvg size={18} className="dxc-ddm-item-group-icon" /> : null}
      </Block>
    );
  }
}
