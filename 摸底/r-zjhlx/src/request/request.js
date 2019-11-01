// import axios from "axios";
// const instance = axios.create();

// const bmd = [
//   {
//     path: "/user/login"
//   }
// ];

// instance.interceptors.request.use(function(config) {
//   const token =
//     window.sessionStorage.getItem("token") == null
//       ? ""
//       : window.sessionStorage.getItem("token");

//   const inbmd = bmd.filter(item => {
//     return item.path == config.url;
//   });

//   if (!inbmd.length) {
//     config.headers["authorization"] = token;
//     if (!token.length) {
//       return Promise.reject({ code: 0, msg: "失败" });
//     }
//   }
//   return config;
// });

// // Add a response interceptor
// instance.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
// export default instance;
