import fs from "fs";
import path from "path";

const sourceDir = "./files";
const destinationDir = "./copied-files";

//существует ли папка ОТКУДА надо скопировать
if (!fs.existsSync(sourceDir)) {
    console.warn("Source dir doesnt exist");
    process.exit(0);
}
//существует ли папка КУДА надо скопировать
if (fs.existsSync(destinationDir)) {
    fs.rmSync(destinationDir, { recursive: true, force: true });
    console.log("DestinationDir removed");
}
//создаем папку КУДА надо скопировать
fs.mkdirSync(destinationDir);
//"читаем" директорию
fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        fileNames.forEach((fileName, index) => {
            //для каждого файла из масива создаем пути
            const sourceFilePath = path.join(sourceDir, fileName);
            const destinationFilePath = path.join(
                destinationDir,
                `${index + 1}. ${fileName}`
            );
            //создаем потоки
            const readFileStream = fs.createReadStream(sourceFilePath);
            const writeFileStream = fs.createWriteStream(destinationFilePath);
            //читаем-записываем
            readFileStream.pipe(writeFileStream);

            writeFileStream.on("finish", () => {
                console.log(`File ${fileName} was copied`);
            });
        });
    }
});
