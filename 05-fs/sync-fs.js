const fs = require("fs");

//They block event loop!
try {
    fs.writeFileSync("./first.txt", "First file text");
    console.log("File was written");

    fs.appendFileSync("./first.txt", "\nOne more line");
    console.log("Appended");

    fs.renameSync("./first.txt", "./05-fs/new-name.txt");
    console.log("file was rename");
} catch (error) {
    console.log(error);
}
