const fs = require("fs");

if(fs.existsSync("config.json")) {
   console.log("Exists");
} else {
   console.log("Not Exists")
}
