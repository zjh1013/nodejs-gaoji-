import React, { Component } from "react";
import Hea from "../components/header";
import axios from "axios";
// import { fabiao } from "../api/api";
class fabiaos extends Component {
  state = {
    title: "",
    content: ""
  };
  render() {
    return (
      <div>
        <div className="shang">
          <div>
            <p>
              <input onChange={this.changeTitle} />
            </p>
            <p>
              <input onChange={this.changecontent} />
            </p>
            <button onClick={this.add.bind(this)}>评论</button>
          </div>
        </div>
        <Hea></Hea>
      </div>
    );
  }
  changeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  changecontent = e => {
    this.setState({
      content: e.target.value
    });
  };
  add() {
    const { title, content } = this.state;
    axios.post("/addw", { title, content }).then(res => {
      console.log(res);
    });
  }
  // componentDidMount() {
  //   if (window.sessionStorage.token === "") {
  //   this.props.history.push({ path: "/login" });

  //   }
  // }
}
export default fabiaos;
