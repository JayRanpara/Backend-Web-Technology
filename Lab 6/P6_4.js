// 4) Create a program that appends the text into a file named output.txt. (A)

fs = require("fs");

fs.appendFile("./output.txt","\nThis Is Third Line.",(err)=>{
    if(err){
        console.log("Error : "+err);
        return;
    }
})

console.log("Append SuccessFully")