"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/user/login", controller.user.login);

  router.post("/details", controller.home.details);
  router.post("/addp", controller.home.addp);
  router.post("/addw", controller.home.addw);

  router.get("/getl", controller.home.getl);
};
