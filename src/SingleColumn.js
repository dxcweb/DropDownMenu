import React from "react";
import MenuItem from "./MenuItem";
import Scroll from "./Scroll";

export default class SingleColumn extends React.Component {
  onClickItem = ({ value }) => {
    const { onChange } = this.props;
    onChange(value);
  };
  render() {
    const { data, value } = this.props;
    return (
      <Scroll>
        {data.map((row, index) => {
          return (
            <MenuItem
              onClick={this.onClickItem}
              isActive={value === row.value}
              data={row}
              key={index}
            />
          );
        })}
      </Scroll>
    );
  }
}
