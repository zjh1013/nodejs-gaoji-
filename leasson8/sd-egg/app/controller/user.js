'use strict';
const {Controller} = require('egg');

class UserController extends Controller {
    
    async login(){
        const {username , password } = this.ctx.request.body;
        const $sql = `select * from user where username='${username}' and password='${password}'`
        const $params = [username , password];
        const result = await this.app.mysql.query($sql,$params);
        console.log(result)
        
        if(result.length){
            this.ctx.body={
                code:1,
                msg:"登录成功"
            }
        }else{
            this.ctx.body={
                code:0,
                msg:"登录失败"
            }
        }
    }
    async registry(){
        const {username , password} = this.ctx.request.body;
        const $sql = `insert into user (username,password)values(?,?)`
        const $params = [username , password];
        const  result = await this.app.mysql.query($sql,$params)
        if(result.affectedRows>0){
            this.ctx.body={
                code:1,
                msg:"插入成功"
            }
        }else{
            this.ctx.body={
                code:0,
                msg:"插入失败"
            }
        }
    }
}


module.exports = UserController