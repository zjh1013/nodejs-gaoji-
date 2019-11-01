const mysql = require('mysql')//找数据库

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123321',
    database: 'lx'
});

connection.connect();
module.exports.query = function ($sql,$params=[]) {
    return new Promise((resolve, reject) => {
        connection.query($sql,$params,(error,results)=>{
            if(error){
                reject(error)
            }else{
                resolve(results)
            }
        })
    })
}
