const { writeFileSync, readFileSync } = require("fs");
const fs = require("fs/promises");
const path = require("path");

const dataText = "Hello. My name is Daniil";
const secondLine = "And i would like to be frontend developer";

fs.writeFile(path.resolve(__dirname, "./first.txt"), dataText)
    .then(() => console.log("File was written"))
    .then(() =>
        fs.appendFile(path.resolve(__dirname, "./first.txt"), `\n${secondLine}`)
    )
    .then(() => console.log("Appended"))
    .catch((err) => console.log(err));

// async function writeAndCount() {
//     try {
//         await fs.writeFile("./first.txt", dataText); // записывает первую строку
//         console.log("File was written");
//         await fs.appendFile("./first.txt", `\n${secondLine}`); // добавляет вторую строку
//         console.log("Appended");
//         const length = (await fs.readFile("./first.txt")).toString().length; // читает оба файла и узнает их длину
//         await fs.writeFile("textLengt.txt", length.toString()); // записывает длину в новый файл await
//         fs.unlink("./first.txt"); // удаляет первый файл
//         console.log("File was deleted");
//     } catch (err) {
//         console.log(err);
//     }
// }
