import React from "react";

export default class CheckedSvg extends React.Component {
  render() {
    const { size = 8, className } = this.props;
    return (
      <svg className={className} viewBox="0 0 1024 1024" width={size} height={size}>
        <path d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104l-248.832-195.072-110.08 88.576 429.568 437.248c73.728-189.44 308.224-559.616 594.432-822.784l-26.112-60.928m0 0z" />
      </svg>
    );
  }
}
