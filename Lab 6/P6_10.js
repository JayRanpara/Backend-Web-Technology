const fs = require("fs");

console.log("watching file")
fs.watch("my-data/p1.txt",(change)=>{
   if(change) {
      console.log("file changed")
   }
})