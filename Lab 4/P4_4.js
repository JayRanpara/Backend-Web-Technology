const path = require("path");

let p = "file.txt";

if(path.isAbsolute(p)) {
   console.log("absolute path")
} else{
   console.log("reletive path");
}