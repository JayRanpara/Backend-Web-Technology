// ) Create an EventEmitter instance, Register an event "greet" and print a message when 
// triggered. Fire that event manually using .emit().(B) 
const events = require("events")

const EventEmitter = new events();//this is class not object

EventEmitter.on("greet",(msg)=>{
   setInterval(()=>{
      console.log(msg)
   },2000)
   
})

EventEmitter.emit("greet","hello")

// setInterval(()=>{
//    EventEmitter.emit("greet","hello")
// },1000)