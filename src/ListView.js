import React from "react";
import classNames from "classnames";
import "./ListView.css";
import MenuItem from "./MenuItem";

export default class ListView extends React.Component {
  onClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  renderChildren = () => {
    const children = [];
    const { level, data, onClickItem, activeGroup, onClickGroup } = this.props;
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      if (level === 2 || row.group === activeGroup) {
        children.push(<MenuItem onClickGroup={onClickGroup} key={i} level={level} {...row} />);
      }
    }
    return children;
  };
  render() {
    const { level } = this.props;
    const listClass = classNames({
      "dxc-drop-down-menu-list-flex": level === 1,
      "dxc-drop-down-menu-list-fixed": level !== 1
    });
    return (
      <div onClick={this.onClick} className={listClass}>
        {this.renderChildren()}
      </div>
    );
  }
}
