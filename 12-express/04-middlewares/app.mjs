import express from "express";
import morgan from "morgan";
// import qs from "querystring";
const app = express();

app.use(morgan("tiny"));
//Для отправки JSON файла методом POST на сервер.конвертирует JSON в объект JS и записывает в свойство req.body
app.use(express.json()); //то же самое, что и закомментировано ниже

// app.use("/", (req, res, next) => {
//     let data = "";
//     req.on("data", (chunk) => {
//         data += chunk;
//     });
//     req.on("end", () => {
//         const parsedJSON = JSON.parse(data);
//         req.body = parsedJSON;
//         next();
//     });
// });
//================================
//================================
//Для отправки Формы методом POST на сервер. Конвертирпует в объект JS. Extended:true - использование внешнего модуля qs
app.use(express.urlencoded({ extended: true })); //то же самое, что и закомментировано ниже
// app.use((req, res, next) => {
//     if (req.headers["content-type"] == "application/x-www-form-urlencoded") {
//         let data = "";
//         req.on("data", (chunk) => (data += chunk.toString()));
//         req.on("end", () => {
//             const parsedForm = qs.parse(data);
//             req.body = parsedForm;
//             next();
//         });
//     } else {
//         next();
//     }
// });

app.use((req, res) => {
    console.log(req.body);
    return res.send("This is express server");
});

app.listen(5000, () => {
    console.log("Server is listening");
});
