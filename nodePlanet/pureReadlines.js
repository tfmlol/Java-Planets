var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);
// creating an interface with readline that passes the input and output process
// exactly like calling a scanner library in Java

var realPerson = {
   name: "",
   sayings: []
};

rl.question("What is your name?", function(answer  ){
// ask the user a question and initialize the function when we have an answer
   realPerson.name = answer;

   rl.setPrompt(`What would ${realPerson.name} say`); // can't user backticks for some reason
   // calls the prompt command in the readline library to prompt questions

   rl.prompt();
   // displays the prompt (like console.log)

   rl.on("line", function(saying){
      // event listener that will fire when user submits an answer
      console.log(saying.trim());
      // returns the saying input
   });

});

/*
readline seems to be the most popular method for nodejs to acept user inputs and outputs
I can use this to build a CLI game but need to figure out how to use backticks w/ nodejs
apparently it's a relatively new method so maybe I need to update node?

NODEJS readline was changed in nodejs 5 and up :(
ned to research a new method

*/
