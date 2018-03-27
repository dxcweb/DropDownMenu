import React from "react";
import Block from "dxc-flex";
import Interval from "./Interval";
import Overlay from "fs-overlay";
import MenuOption from "./MenuOption";
import "./Menu.css";

export default class Menu extends React.PureComponent {
  state = {
    activeIndex: null,
    insideData: {}
  };
  handleClickOption(index) {
    const { activeIndex } = this.state;
    if (activeIndex === index) {
      this.setState({ activeIndex: null });
    } else {
      this.setState({ activeIndex: index });
    }
  }
  handleCloseOverlay = () => {
    this.setState({ activeIndex: null });
  };
 
  handleChange = option => {
    const { value, onChange } = this.props;
    onChange({ ...value, ...option });
    this.setState({ activeIndex: null });
  };
  renderChildren() {
    const { data, value } = this.props;
    const children = [];
    const length = data.length;
    const { activeIndex } = this.state;

    for (let i = 0; i < length; i++) {
      const row = data[i];
      const isActive = activeIndex === i;

      const { field } = row;

      children.push(
        <MenuOption
          value={value[field]}
          isActive={isActive}
          onChange={this.handleChange}
          onClickOption={this.handleClickOption.bind(this, i)}
          key={i}
          data={row}
        />
      );
      if (i < length - 1) {
        children.push(<Interval key={`interval${i}`} />);
      }
    }
    return children;
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <Block className="dxc-drop-down-menu">{this.renderChildren()}</Block>
        <Overlay onClose={this.handleCloseOverlay} open={activeIndex !== null} />
      </div>
    );
  }
}
