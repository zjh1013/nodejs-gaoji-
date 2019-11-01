// import axios from "axios";
// const instance = axios.create();
// const bmd = [
//   {
//     path: "/api/user/login"
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
//     // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
//     if (!token.length) {
//       return Promise.reject({ code: 0, msg: "失败" });
//     }
//   }
//   return config;
// });
// instance.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );
// export default instance;

import axios from "axios";
const instance = axios.create();
const bmd = [
  {
    path: "/api/user/login"
  }
];
instance.interceptors.request.use(function(config) {
  const token =
    window.sessionStorage.getItem("token") == null
      ? ""
      : window.sessionStorage.getItem("token");

  const inbmd = bmd.filter(item => {
    return item.path == config.url;
  });

  if (!inbmd.length) {
    config.headers["authorization"] = token;
    if (!token.length) {
      return Promise.eject({ code: 1, msg: "失败" });
    }
  }
  return config;
});

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default instance;
