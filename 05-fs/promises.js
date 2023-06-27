const fs = require("fs/promises");

fs.writeFile("./first.txt", "First file text")
    .then(() => console.log("File was written"))
    .then(() => fs.appendFile("./first.txt", "\nOne more line"))
    .then(() => console.log("Appended"))
    .then(() => fs.rename("./first.txt", "./05-fs/new-name.txt"))
    .then(() => console.log("file was rename"))
    .catch((err) => console.log(err));
