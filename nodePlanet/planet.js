// Ask the user for their earth weight
console.log("What is your earth weight?");
// Acept the user input




process.stdin.resume();
// proccess.stdin means process.standard input(ie.keyboard)
process.stdin.setEncoding("utf8");
// Sets your keyboard to listen for UTF8 characters? (I'm guessing)
var util = require("util");
// assigns a var called util to the util library

process.stdin.on("data", function(text) {
// creates a function text and assigns the keyboard listener to it?
   console.log("recieved data", util.inspect(text));
   if (text === "quit\n"){
   // if you type "quit" it quits out of the program
      done();
   }
});

function done() {
   console.log("Now that process.stdin is paused, there is nothing more to do");
   process.exit();
}
