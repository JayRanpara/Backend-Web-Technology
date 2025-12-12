const fs = require("fs")

fs.copyFile("my-data/p1.txt","my-data/p2.txt",(err)=>{
   if(err) {
      console.log(err);
   }
   else {
      console.log("successfully copied")
   }
})