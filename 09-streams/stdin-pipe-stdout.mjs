import stream from "stream";
import fs from "fs";
//трансформационные потоки
const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        cb(null, upperCased);
    },
});
const reverseStream = new stream.Transform({
    transform(chunk, encoding, cb) {
        const arrayOfChars = chunk.toString().split("");
        const lastChar = arrayOfChars.pop();
        const reversed = arrayOfChars.reverse().concat(lastChar).join("");
        cb(null, reversed);
    },
});
process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// //Перенаправили все из stdin в текстовый файл по пути filePath
// const filePath = "./files/stdin-dump.txt";
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);
// //Выводим просто в консоль
// process.stdin.pipe(process.stdout);
