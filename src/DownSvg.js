import React from "react";

export default class DownSvg extends React.Component {
  render() {
    const { size = 20, fill = "#f3434d", className } = this.props;
    return (
      <svg className={className} viewBox="0 0 1024 1024" width={size} height={size}>
        <path
          d="M512 669.538462a31.428923 31.428923 0 0 1-22.275938-9.223877l-252.061539-252.061539a31.507692 31.507692 0 0 1 44.551877-44.559754L512 593.471015l229.7856-229.7856a31.507692 31.507692 0 1 1 44.551877 44.559754l-252.061539 252.061539A31.405292 31.405292 0 0 1 512 669.538462z"
        />
      </svg>
    );
  }
}
