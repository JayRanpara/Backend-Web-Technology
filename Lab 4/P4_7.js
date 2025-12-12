const os = require("os");

function convertToGB(bytes) {
   return ((bytes)/(1024*1024*1024)).toFixed(2)//bytes ne GB ma convert kare
}

console.log("Total Memeory : ",convertToGB(os.totalmem()))
console.log("Free Memeory : ",convertToGB(os.freemem()))