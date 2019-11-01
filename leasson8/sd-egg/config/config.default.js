'use strict';
module.exports = appInfo =>{
    const config ={
        keys:'server123'
    }
    const userConfig = {
        security:{
            csrf :{
                enable:false
            }
        },
        mysql : {
            client : {
                host : 'localhost',
                port : '3306',
                user : 'root',
                password : '123321',
                database : 'zjh10-11'
            },
            app:true,
            agent:false
        }
    }

    return {
        ...config,
        ...userConfig
        
    }
}
