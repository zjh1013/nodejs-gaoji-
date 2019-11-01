// module.exports = (opt, app) => {
//   return async function oanth(ctx, next) {
//     if (ctx.session.userinfo === undefined) {
//       ctx.status = 401;
//       ctx.body = {
//         code: 0,
//         msg: "没有权限访问1"
//       };
//       return;
//     } else if (
//       ctx.request.headers["authorization"] === ctx.session.userinfo["token"]
//     ) {
//       await next();
//     } else {
//       ctx.status = 401;
//       ctx.body = {
//         code: 0,
//         msg: "没有权限访问2"
//       };
//     }
//   };
// };

module.exports = (opt, app) => {
  return async function oanth(ctx, next) {
    if (ctx.session.userinfo === undefined) {
      ctx.body = {
        code: 0,
        msg: "没有权限111"
      };
    } else if (
      ctx.request.headers["authorization"] === ctx.session.userinfo["token"]
    ) {
      await next();
    } else {
      ctx.body = {
        code: 0,
        msg: "没有权限222"
      };
    }
  };
};
