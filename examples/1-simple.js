import React from "react";
import ReactDOM from "react-dom";

import Menu from "drop-down-menu";
import { height } from "window-size";

class Demo extends React.Component {
  state = {
    menuValue: {
      option2: "item1"
    }
  };
  handleMenuChange = menuValue => {
    this.setState({ menuValue });
  };
  render() {
    const data = [
      {
        field: "option1",
        title: "选项1",
        children: [
          {
            title: "选项1-1",
            value: "item1"
          },
          {
            title: "选项1-2",
            value: "item2"
          },
          {
            title: "选项1-3",
            value: "item3"
          }
        ]
      },
      {
        field: "option2",
        title: "选项2",
        type: "two-column",
        children: [
          {
            title: "选项1-1",
            value: "item1"
          },
          {
            title: "选项1组-2",
            value: "item2",
            children: [
              {
                title: "组-1-1",
                value: "item1"
              },
              {
                title: "组-1-2",
                value: "item2"
              }
            ]
          },
          {
            title: "选项2组-1",
            value: "item3",
            children: [
              {
                title: "组-2-1",
                value: "item1"
              },
              {
                title: "组-2-2",
                value: "item2"
              }
            ]
          },
          {
            title: "选项1-3",
            value: "item4"
          }
        ]
      }
    ];

    const { menuValue } = this.state;
    return (
      <div style={{ height: 100 }}>
        <div style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
          <Menu data={data} value={menuValue} onChange={this.handleMenuChange} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById("__react-content"));
