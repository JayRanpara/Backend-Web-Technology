// Create a new URL object with base, then append pathname and query, also print the final 
// URL. (B) 
const url = require("url")

const urlobj = new URL("https://www.google.com")

urlobj.pathname = "/mango";

console.log("after adding pathname url"+urlobj.toString())

urlobj.searchParams.append("id","1")

urlobj.searchParams.append("name","jay")

console.log("final url"+urlobj.toString())