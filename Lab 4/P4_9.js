const os = require("os");

const upTimeSec = os.uptime();
const upTimeHour = (upTimeSec/3600).toFixed(2);
console.log("Open pc in Hour = "+upTimeHour)
console.log("Open pc in Second =",upTimeSec)
