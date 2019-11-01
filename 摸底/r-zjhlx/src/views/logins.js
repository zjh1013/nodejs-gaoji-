// import React, { Component } from "react";
// import Hea from "../components/header";
// import { login } from "../api/api";
// class logins extends Component {
//   state = {
//     username: "",
//     password: ""
//   };
//   render() {
//     return (
//       <div>
//         <div className="shang">
//           <div>
//             <p>
//               <input onChange={this.changeusername} />
//             </p>
//             <p>
//               <input onChange={this.changepassword} />
//             </p>
//             <button onClick={this.add.bind(this)}>登录</button>
//           </div>
//         </div>
//         <Hea></Hea>
//       </div>
//     );
//   }
//   changeusername = e => {
//     this.setState({
//       username: e.target.value
//     });
//   };
//   changepassword = e => {
//     this.setState({
//       password: e.target.value
//     });
//   };
//   add() {
//     const { username, password } = this.state;
//     login({ username, password }).then(res => {
//       console.log(res);
//       window.sessionStorage.setItem("token", res.data.token);
//     });
//   }
// }

// export default logins;
