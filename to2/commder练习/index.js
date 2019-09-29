const commander = require('commander')
const package = require('./package.json')
const inquirer = require('inquirer')
const actionHeader = () => {
    const inquirerArr = [
        {
            type:'input',
            name:'username',
            message:'请输入你的用户名:'
        }
    ]
    inquirer.prompt(inquirerArr).then(res => {
        console.log(res)

    })
}

commander
    .version(package.version)
    .command('login')
    .action(actionHeader)

commander.parse(process.argv)
