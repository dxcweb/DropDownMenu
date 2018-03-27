import React from "react";
import Block from "dxc-flex";
import ListView from "./ListView";

export default class Adapter extends React.PureComponent {
  getLevels(data, levels = [], level = 0, group) {
    if (!levels[level]) levels[level] = [];
    for (let i = 0; i < data.length; i++) {
      const temp = data[i];
      if (group) {
        temp.group = group;
      }
      levels[level].push(temp);
      if (temp.children) {
        this.getLevels(temp.children, levels, level + 1, temp.value);
      }
    }
    return levels;
  }
  state = {
    activeGroup: ""
  };
  onClickGroup = activeGroup => {
    this.setState({ activeGroup });
  };
  render() {
    const { data, value } = this.props;
    const levels = this.getLevels(data);
    const levelLen = levels.length;
    const { activeGroup } = this.state;
    return (
      <Block>
        {levels.map((row, index) => {
          return (
            <ListView
              value={value}
              activeGroup={activeGroup}
              onClickGroup={this.onClickGroup}
              data={row}
              level={levelLen - index}
              key={index}
            />
          );
        })}
      </Block>
    );
  }
}
