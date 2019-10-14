const cluster = require('cluster');
const childrenProcess = require('children_process')
const {cpus} = require('os');
const cpuLength = cpus().length;

if(cpuLength.isMaster){
    var worker ;
    for(var i=0 ; i<=cpuLength;i++){
        work = cluster.fork();
        worker.send('hahahah');
        worker.on('message',val=>{
            console.log(`master:${val}`);
        });
    }
    cluster.on('exit',worker =>{
        console.log(`worker : ${worker.id} pid : ${woker.process.pid}`)
        Worker.kill(['SIGTERM']);
        worker = cluster.fork();
        
    })    
}else{
    require('./server.js');
    process.on('message',val=>{
        console.log(`worker : ${val}`);
        
    });
    process.send('hehehe')
}
