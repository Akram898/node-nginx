const fs = require("fs");
const path = require("path");

//Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("Folder created....");
// });

//Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello from node js",
//   (err) => {
//     if (err) throw err;
//     console.log("file written to..");

//     // write what you want to make in the callback file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "A second line",
//       (err) => {
//         if (err) throw err;
//         console.log("file written to..");
//       }
//     );
//   }
// );

//Read File
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", function (
//   err,
//   data
// ) {
//   if (err) throw err;
//   console.log(data);
// });

//Rename File
fs.rename(path.join(__dirname, "new.txt"), (__dirname, "hello.txt"), (err) => {
  if (err) {
    throw err;
  } else {
    console.log("file reamed");
  }
});
