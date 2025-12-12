const child_process = require("child_process");
const { stdout } = require("process");
// console.log(child_process)
const {exec} = child_process;

child_process.exec("node -v",(error,stdout)=>{
   if(error) {
      console.log(error.message);
   } else {
      console.log("Node Version : "+stdout)
   }
})


