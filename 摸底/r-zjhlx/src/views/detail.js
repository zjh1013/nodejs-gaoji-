import React, { Component } from "react";
import axios from "axios";
export default class detail extends Component {
  state = {
    list: [],
    inner: ""
  };
  render() {
    const { query } = this.props.location;
    const { list } = this.state;

    return (
      <div>
        <div>
          <h2>{query.title}</h2>
        </div>
        <div>评论区:</div>
        <div>
          {list.map((item, index) => (
            <p key={index}>
              <b>{item.inner}</b>
            </p>
          ))}
        </div>
        <div>
          <input onInput={this.add.bind(this)} />
          <button onClick={this.p.bind(this)}>评论</button>
        </div>
      </div>
    );
  }
  p() {
    axios
      .post("/addp", {
        inner: this.state.inner,
        listid: this.props.location.query.id
      })
      .then(res => {
        this.setState({
          list: res.data.result
        });
      });
  }
  add(e) {
    this.setState({
      inner: e.target.value
    });
    console.log(this.state.inner);
  }
  componentDidMount() {
    axios.post("/details", { id: this.props.location.query.id }).then(res => {
      this.setState({
        list: res.data.result
      });
    });
  }
}
