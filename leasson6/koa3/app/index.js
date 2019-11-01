const koa = require('koa');
const { query } = require('./config/index')
const koaRouter = require('koa-router');//配置路由
const bodyparser = require('koa-bodyparser');//post用的


const app = new koa();
const router = new koaRouter();
app.use(bodyparser());
app.use(router.routes())
app.use(router.allowedMethods());

const { login, registry } = require('./controll/user')
const { banner, nav, tab, tabs ,addList } = require('./controll/home')



router.post('/user/login', login)
router.post('/user/registry', registry)
router.get('/home/bannerList', banner)
router.get('/home/navList', nav)
router.get('/home/tabList', tab)
router.get('/home/tabs', tabs)


router.post('/home/val', addList)



app.listen(8080, () => {
    console.log('this is my server http://localhost:' + 8080)

})
