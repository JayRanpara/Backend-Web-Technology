const os = require("os");

const cpus = os.cpus();

console.log("Number of CPU Cores = ",cpus.length)
console.log(cpus[0].speed)
cpus.forEach((core,index)=> {
   console.log(`Core ${index+1} and model ${core.model}`)
});
console.log(os.networkInterfaces())