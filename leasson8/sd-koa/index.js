const koa = require('koa');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new koa()
const router = new koaRouter();

// app.use(bodyParser());
app.use(router.routes())
app.use(router.allowedMethods());

const { login, registry } = require('./controller/user')
const { list } = require('./controller/home')
const { getUserlist, addUser, delUser, editUser,search,fenye } = require('./controller/zsgc')


router.post('/user/login', login)
router.post('/user/registry', registry)

router.get('/home/list', list)

router.get('/zsgc/getUserlist', getUserlist)//查
router.post('/zsgc/addUser', bodyParser(), addUser)//增
router.post('/zsgc/delUser', bodyParser(), delUser)//删
router.post('/zsgc/editUser', bodyParser(), editUser)//改
router.post('/zsgc/search',   bodyParser(),search)//搜索
router.get('/zsgc/fenye',   bodyParser(),fenye)//分页



app.listen(7878, () => {
    console.log('this is my server http://localhost:' + 7878)
})