import { season, temp } from "./named-exports.mjs";
import { humidity, isRaining } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import SERVER, { USERNAME as MY_NAME, PASSWORD } from "./mixed-exports.mjs";

console.log(season);
console.log(temp);

console.log(humidity);
console.log(isRaining);

getDataFromServer("https://jsonplaceholder.typicode.com/posts/1")
    .then((post) => console.log(post))
    .catch((err) => console.log(err));

console.log(SERVER);
console.log(MY_NAME, PASSWORD);
