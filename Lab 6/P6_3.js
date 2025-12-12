// 3) Create a program that writes the text into a file named output.txt. (A) 

const fs = require("fs");

fs.writeFile("./output.txt","heyy \nGood Morning",(err)=>{

    if(err){
        console.log("Error : "+err);
        return;
    }
})
console.log("Write SuccessFully")