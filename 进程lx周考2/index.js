const cluster = require('cluster')
const childrenPeocess = require('child_process')
const { cpus } = require('os');
const cpuLength = cpus().length;

if (cluster.isMaster) {
    var worker;

    for (var i = 0; i <= cpuLength; i++) {
        work = cluster.fork();
        worker.send('hahaha');
        worker.on('message', val => {
            console.log(`master:${val}`);
        });
    }
    cluster.on('exit', worker => {
        console.log(`worker ${worker.id} pid : ${worker.process.pid} is exit`)
        worker.kill(['SIGTERM']);
        worker = cluster.fork();
    });
}
else {
    require('./server.js');
    process.on('message', val => {
        console.log(`worker :${val}`);
    });
    // process.send('hehehe');
}


const cluster = require('cluster');
const childrenprocess = require('child_process');
const {cpus} = require('os')
const cpuLength = cpus().length;

if(cluster.isMaster){
    var worker;
    for(var i=0; i<=cpuLength; i++){
        worker = cluster.fork();
        work.send('hahaha')
        work.on('massage',val=>{
            console.log(`master:${val}`)
            
        })
    }
    cluster.on('exit',Worker=>{
        console.log(`worker : ${worker.id} pid : ${worker.process.pid} is exit`)
        worker.kill(['SIGTEAM'])
        worker = cluster.worker();
        
    })

}else{
    require('./server.js')
    process.on('massage',val=>{
    console.log(`worker: ${val}`)
    
    })
    process.send('hehehe')
}