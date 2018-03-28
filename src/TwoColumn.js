import React from "react";
import Block from "dxc-flex";
import MenuItem from "./MenuItem";
import MenuGroup from "./MenuGroup";
import { findIndex } from "lodash";
import Scroll from "./Scroll";

export default class TwoColumn extends React.Component {
  state = {
    activeGroup: "",
    activeItem: ""
  };
  componentWillMount() {
    this.updateActive(this.props.value);
  }
  componentWillReceiveProps(nextProps) {
    this.updateActive(nextProps.value);
  }
  updateActive(value) {
    let activeGroup = "";
    let activeItem = "";
    if (typeof value === "object") {
      for (let key in value) {
        activeGroup = key;
        activeItem = value[key];
      }
    } else if (typeof value === "string") {
      activeGroup = value;
    }
    this.setState({ activeGroup, activeItem });
  }
  onClickGroup = ({ children, value }) => {
    const { onChange } = this.props;
    if (children) {
      this.setState({ activeGroup: value });
    } else {
      onChange(value);
    }
  };
  onClickItem = ({ value }) => {
    const { onChange } = this.props;
    const { activeGroup } = this.state;
    onChange({ [activeGroup]: value });
  };

  renderItem() {
    const { data } = this.props;
    const { activeGroup, activeItem } = this.state;
    if (!activeGroup || activeGroup === "") {
      return null;
    }
    const index = findIndex(data, { value: activeGroup });
    if (index < 0 || !data[index].children) {
      return null;
    }
    return data[index].children.map((row, index) => {
      return (
        <MenuItem
          onClick={this.onClickItem}
          isActive={row.value === activeItem}
          data={row}
          key={index}
        />
      );
    });
  }
  render() {
    const { data } = this.props;
    const { activeGroup } = this.state;
    return (
      <Block>
        <Scroll style={{ width: 120, background: "#efefef" }}>
          {data.map((row, index) => {
            return (
              <MenuGroup
                isActive={row.value === activeGroup}
                onClick={this.onClickGroup}
                data={row}
                key={index}
                showIcon={!!row.children}
              />
            );
          })}
        </Scroll>
        <Scroll style={{ flex: 1 }}>{this.renderItem()}</Scroll>
      </Block>
    );
  }
}
