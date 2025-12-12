const fs = require("fs");

fs.unlink("output.txt",(err)=>{
   if(err) {
      console.log(err)
      return
   }
   
})
console.log("delete successfully")