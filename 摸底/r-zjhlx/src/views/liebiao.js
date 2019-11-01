import React, { Component } from "react";
import Hea from "../components/header";
import axios from "axios";
export default class liebiao extends Component {
  state = {
    liebiao: []
  };
  render() {
    const { liebiao } = this.state;
    return (
      <div>
        <div className="shang">
          <div>
            {liebiao.map((item, index) => (
              <div
                key={index}
                className="aa"
                onClick={this.xq.bind(this, item)}
              >
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>

        <Hea></Hea>
      </div>
    );
  }
  xq(item) {
    this.props.history.push({
      pathname: "/detail",
      query: item
    });
  }
  componentDidMount() {
    axios.get("/getl").then(res => {
      this.setState({
        liebiao: res.data.result
      });
    });
  }
}
