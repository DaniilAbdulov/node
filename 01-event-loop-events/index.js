const fs = require('fs');
const dns = require('dns');
const { clearInterval } = require('timers');

function info(text){
    console.log(text, performance.now().toFixed(2));

}
console.log('Program start');

//close events
fs.writeFile('./test.txt', 'Hello Node.js', () => info('File written'));

//promises
Promise.resolve().then(()=> info('Promise 1'))

//nexttick
process.nextTick(()=> info('Next tick 1'));

//setimmediate
setImmediate( ()=> info('Immediate 1') );

//timeouts
setTimeout(()=> info('Timeout 1'), 0);
setTimeout(()=> {
    process.nextTick( ()=>info('Next tick 2') )
    info('Timeout 2')
}, 100);

//intervals
let intervalCount = 0;
const intervalId = setInterval( ()=>{
    info(`Interval ${intervalCount+=1}`);
    if(intervalCount === 2) clearInterval(intervalId);
}, 50 );

//io events
dns.lookup('localhost', (err, address, family)=> {
    info('DNS 1 localhost');
    Promise.resolve().then( ()=> info('Promise DNS') )
    process.nextTick( ()=> info('Next tick DNS') )
})

console.log('Program end');
