'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getbanner',controller.home.getbanner)//轮播图查询列表
  router.post('/addbanner',controller.home.addbanner)//轮播图增加列表
  router.post('/delbanner',controller.home.delbanner)//轮播图删除列表
  router.post('/editbanner',controller.home.editbanner)//轮播图编辑列表

  router.get('/gettabnav',controller.home.gettabnav)
  router.get('/gettablist',controller.home.gettablist)


  router.post('/user/login',controller.user.login)
  router.post('/user/registry',controller.user.registry)
};


//1571628388766_8318
