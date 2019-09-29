#!/usr/bin/env node
const commander = require('commander');
const inquirer = require('inquirer');
const package = require('./package.json')

const actionHeader = () =>{
    const inquirerarr=[
        {
            type:"input",
            name:"username",
            message:"输入用户名:"
        },
        {
            type: 'password',
            name: 'pw',
            message: '密码',
        },{
            type:"checkbox",//多选的
            name:"hobby",
            message:"你有什么爱好:",
            choices:['代码','写代码','敲代码']
        },{
            type:'number',
            name:'age',
            message:'你多大了:'
        },
        {
            type: 'list',//单选的
            name: 'phone',
            message: '选择手机品牌',
                choices: [
                    { name: '小米', value: 'mi' },
                    { name: '华为', value: 'huawei' },
                    { name: '苹果', value: 'apple' }
                ]
        },
        {
            type:'confirm',
            name:'confirm',
            message:'确定提交吗?'
        }
    ]
    inquirer.prompt(inquirerarr).then((res)=>{
        if(res.confirm){
            console.log(res)

        }else{
            console.log('取消!!!!!!!')
            
        }
    })
}
commander
        .version(package.version)
        .command('init')
        .action(actionHeader)

commander.parse(process.argv)