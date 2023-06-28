import path from "path";

const filePath = "c:\\Users\\Daniil\\Desktop\\node\\index.js";
const relativePath = ".\\subfolder";

console.log(path.isAbsolute(filePath)); //true
console.log(path.isAbsolute(relativePath)); //false

console.log(path.basename(filePath)); //последняя часть пути

console.log(path.dirname(filePath)); //c:\Users\Daniil\Desktop\node путь без названия файла

console.log(path.resolve(relativePath));

console.log(path.extname(filePath)); //.js расширение файла
console.log(path.extname(relativePath)); //пустая строка

console.log(path.parse(filePath));
// {
//     root: 'c:\\',
//     dir: 'c:\\Users\\Daniil\\Desktop\\node',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
const parsePath = path.parse(filePath);
console.log(path.join(parsePath.dir, `renamed-${parsePath.name}.mjs`)); //c:\Users\Daniil\Desktop\node\renamed-index.mjs
