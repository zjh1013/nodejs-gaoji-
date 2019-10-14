const koa = require('koa')
const koaRouter = require('koa-router')
const bodyparser = require('koa-bodyparser')
const mysql = require('mysql');

const app = new koa();
const router = new koaRouter();
app.use(bodyparser())
app.use(router.routes())
app.use(router.allowedMethods());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123321',
    database: '1704a-zjh'
});
connection.connect()
function query($sql) {
    return new Promise((resolve, reject) => {
        connection.query($sql,(error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

router.post('/user/login', async ctx => {
    const { username, password,address} = ctx.request.body
    const $sql = `select * from user where username = '${username}' and password = '${password}' and address = '${address}'`
    const results = await query($sql);
    if (results.length) {
        ctx.body = {
            code: 1,
            mas: "login 成功",
            results: results[0]
        }
    } else {
        ctx.body = {
            code: 0,
            mas: "login 失败",
        }
    }
})


app.listen(3000, () => {
    console.log('this is my server http://localhost:' + 3000)

})