import React from "react";
import PropTypes from "prop-types";
import Block from "dxc-flex";
import { find } from "lodash";

import "./MenuOption.css";
import DownSvg from "./DownSvg";
import Popdown from "./Popdown";
import SingleColumn from "./SingleColumn";
import TwoColumn from "./TwoColumn";

export default class MenuOption extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string
  };
  handleChange = value => {
    const { data, onChange } = this.props;
    const { field } = data;
    onChange({ [field]: value });
  };
  renderType() {
    const { data, value } = this.props;
    const { children, type } = data;
    if (type === "two-column") {
      return <TwoColumn onChange={this.handleChange} value={value} data={children} />;
    } else {
      return <SingleColumn onChange={this.handleChange} value={value} data={children} />;
    }
  }
  renderTitle() {
    const { data, value } = this.props;
    const { children, title } = data;
    if (typeof value === "string") {
      const checked = find(children, { value });
      if (checked) {
        return checked.title;
      }
    } else if (typeof value === "object") {
      for (let key in value) {
        const checkedGroup = find(children, { value: key });
        if (checkedGroup) {
          const checked = find(checkedGroup.children, { value: value[key] });
          if (checked) {
            return checked.title;
          }
        }
      }
    }
    return title;
  }
  render() {
    const { onClickOption, isActive } = this.props;
    return (
      <Block
        onClick={onClickOption}
        vertical="center"
        horizontal="center"
        className="dxc-menu-option"
      >
        <span>{this.renderTitle()}</span>
        <DownSvg />
        <Popdown isActive={isActive}>{this.renderType()}</Popdown>
      </Block>
    );
  }
}
