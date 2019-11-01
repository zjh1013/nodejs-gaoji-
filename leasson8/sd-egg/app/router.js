'use strict';
module.exports = app =>{
    const {router , controller} = app;

    router.post('/user/login',controller.user.login)
    router.post('/user/registry',controller.user.registry)
    router.post('/home/bannerlist',controller.home.banner)
}
