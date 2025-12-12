const child_process = require("child_process");

const ls  = child_process.spawn("cmd",['/c','dir']);

ls.stdout.on("data",(data)=>{
   console.log(data.toString())
})
ls.stderr.on("data",(data)=>{
   console.log(data.toString())
})