const fs = require("fs")

fs.mkdir("my-data",(err)=>{
   if(err){
      if(err.code === "EEXISTS") {
         console.log("exists")
      } else{
         console.log("error = ",err);
      }
      return;
   }
   console.log("Folder creted succesfully")
})