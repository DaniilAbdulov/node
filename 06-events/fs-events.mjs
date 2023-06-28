import { EventEmitter } from "events";
import fs from "fs";
const fileEmitter = new EventEmitter();
const filePath = ".first.txt";

fileEmitter.on("writeComplete", () => {
    console.log("File was written");
    fs.appendFile(filePath, "\nOne more line", () => {
        fileEmitter.emit("appendComplete");
    });
});
fileEmitter.on("appendComplete", () => {
    console.log("Appended");
    fs.rename(filePath, "./new-name.txt", () => {
        fileEmitter.emit("renameComplete");
    });
});
fileEmitter.on("renameComplete", () => {
    console.log("file was rename");
});

fs.writeFile(filePath, "First file text", () => {
    fileEmitter.emit("writeComplete");
});
//Данный код просто для примера. Для работы с файлами лучше всего использовать Промисы
