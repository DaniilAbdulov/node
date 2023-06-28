//Несколько слушателей для одного события

import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

myEmitter.on("myEvent", () => {
    console.log("First event listener"); // первый слушатель
});

myEmitter.on("myEvent", () => {
    console.log("Second event listener"); // второй слушатель
});

console.log(myEmitter.getMaxListeners()); //По-умолчанию доступно 10 разных слушателей к одному и тому же емиттеру

//Можно увеличить кол-во слушателей при необходимости
myEmitter.setMaxListeners(25);
console.log(myEmitter.getMaxListeners());

setTimeout(() => myEmitter.emit("myEvent"), 1000);

myEmitter.on("otherEvent", () => {
    console.log("Other event");
});

//название всех событий
console.log(myEmitter.eventNames());
