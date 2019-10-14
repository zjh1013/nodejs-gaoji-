const koa = require('koa');
const koarouter = require('koa-router');
const bodyparser = require('koa-bodyparser')
const mysql = require('mysql');

const app = new koa();
const router = new koarouter();
app.use(router.routes());
app.use(router.allowedMethods())
app.use(bodyparser())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123321',
    database: '1704a-zjh'
});
connection.connect();

function query(mysqls) {
    return new Promise((resolve, reject) => {
        connection.query(mysqls, (error, yess) => {
            if(error){
                reject(error)
            }else{
                resolve(yess)
            }
        })
    })
}

router.post('/user/login', async ctx => {
    const { username } = ctx.request.body
    const mysqls = `select * from user where username = '${username}' `
    const results = await query(mysqls)
    if (results.length) {
        ctx.body = {
            code: 1,
            msg: 'login 成功',
            results: results
        }
    } else {
        ctx.body = {
            code: 0,
            msg: 'login 失败',
        }
    }

})

app.listen(8080, () => {
    console.log('this is my server http://localhost:' + 8080)
})