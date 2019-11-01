const { Service } = require('egg');

class ServiceController extends Service {
    async getbanner() {//查询轮播图列表
        const $sql = `select * from banner`;
        const result = await this.app.mysql.query($sql);
        return result
    }
    async addbanner({ title, picurl, start_time, end_time, link, type }) {//增加轮播图列表
        const $sql = `insert into banner (title,picurl,start_time,end_time,link,type) values (?,?,?,?,?,?)`;
        const $params = [title, picurl, start_time, end_time, link, type];
        const result = await this.app.mysql.query($sql, $params);
        return result
    }
    async delbanner({ id }) {//删除轮播图列表
        const $sql = `delete from banner where id=?`
        const $params = [id];
        const result = this.app.mysql.query($sql, $params);
        return result
    }
    async editbanner({ title, picurl, start_time, end_time, link, type, id }) {//修改轮播图列表
        const $sql = `update banner set title=?,picurl=?, start_time=?,end_time=?,link=?,type=? where id=? `
        const $params = [ title, picurl, start_time, end_time, link, type, id ]
        const result = this.app.mysql.query($sql,$params);
        return result
    }

    async gettabnav(){
        const $sql = `select * from tabnav`
        const result = this.app.mysql.query($sql)
        return result 
    }
}

module.exports = ServiceController

//UPDATE `exam4`.`banner` SET `title`='5' WHERE  `id`=22;