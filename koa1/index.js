const koa = require('koa');
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');

const router = new Router();
const app = new koa()

router.get('/list', async ctx => {
    ctx.body = [
        {
            img: "www.baidu.com"
        }, {
            img: "www.sina.com"
        }
    ]
});

// router.post('/lxpost', async (ctx, next) => {
//     let postParam = ctx.request.body //获取post提交的数据
// });

app.use(router.routes());
app.use(bodyParser());
app.listen(3333, () => {
    console.log('This server is running at http://localhost:' + 3333)
})
