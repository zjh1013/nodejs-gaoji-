// let args = process.argv.slice(2);
// console.log(process.argv)

// args.forEach(arg=>{
//     if(arg === ''){

//     }
// })

// process.stdin.on('data',chunk=>{//进程  nodejs正确的输入

//     process.stdout.write('您输入了：'+chunk.toString())//进程  nodejs正确的输出

// })


var datas = {};
var arr = []
var dataObj = {};//在外面定义对象  
for(var i in datas) {  
    dataObj.name= datas[i];  
    arr.push(dataObj);  
}  


console.log('性感问卷调查现在开始')
process.stdin.on('data', chunk => {
    let tit = chunk.toString().trim()
    if (tit === 'ok') {
        console.log('叫什么？')
        process.stdin.on('data', chunk => {
            datas.names = chunk.toString().trim()
            console.log('多大了?')
            process.stdin.on('data', chunk1 => {
                datas.ages = chunk1.toString().trim()
                console.log('代码敲了几年了?')
                process.stdin.on('data', chunk2 => {
                    datas.dai = chunk2.toString().trim()
                    
                    console.log(arr)
    
    
                })


            })

        })


    }
})