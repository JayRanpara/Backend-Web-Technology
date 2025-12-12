const url = require("url")

const u = "https://www.google.com/?zx=1765255593804&no_sw_cr=1"

const p = url.parse(u,true)
 
console.log("Protocol:",p.protocol)
console.log("Protocol:",p.hostname)
console.log("Protocol:",p.pathname)
console.log("query parameter :",p.query)
console.log("port number:",p.port)