const fs = require('fs');
let isRunning = true;

setTimeout(()=>isRunning = false , 100)
process.nextTick( ()=>console.log('Next Tick') )

function setImmediatePromise(){
    return new Promise( (resolve, reject) => {
        setImmediate( ()=>resolve() )

    } )
}

async function whileLoop(){
    while(isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}


whileLoop().then( ()=> console.log('While loop is done') )