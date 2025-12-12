const fs = require("fs")

fs.readdir("my-data",(err,files)=>{
   if(err){
      console.log(err)
   } else {
      files.forEach(file => {
         console.log(file)
      });
   }
   return;
})