"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/getxslist", controller.xs.getxslist); //查询学生列表
  router.post("/addxslist", controller.xs.addxslist); //增加学生列表
  router.post("/seaxslist", controller.xs.seaxslist); //搜索学生列表
  router.post("/delxslist", controller.xs.delxslist); //删除学生列表

  router.get("/getjslist", controller.js.getjslist); //查询教室列表
  router.post("/deljslist", controller.js.deljslist); //删除教室列表
  router.post("/addjslist", controller.js.addjslist); //增加教室列表
  router.post("/fenjslist", controller.js.fenjslist); //分页教室列表

  router.get("/getbjlist", controller.bj.getbjlist); //获取班级列表
  router.post("/addbjlist", controller.bj.addbjlist); //增加班级列表
  router.post("/editbjlist", controller.bj.editbjlist); //修改班级列表
  router.post("/delbjlist", controller.bj.delbjlist); //删除班级列表

  router.post("/user/login", controller.user.login); //登录
};
