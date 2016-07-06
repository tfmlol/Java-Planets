var prompt = require('prompt');
// assigns var prompt to the library prompt

prompt.start();
// initialies prompt

// Store all the planets as a var
var Krypton = "Krypton" || "krypton";
var Asgard = "Asgard" || "asgard";
var Aiur = "Aiur" || "aiur";
var Vegeta = "Vegeta" || "vegeta";

//Ask for user earth weight
console.log("How much do you weigh?");
// get and store the users input
prompt.get(["userWeight"], function (err, result) {
  if (err) { return onErr(err); }

   // Create the options or planets
   console.log("*********************************************");
   console.log("***Which planet would you like to compare?***");
   console.log("*********************************************");
   console.log("1. Krypton");
   console.log("2. Asgard");
   console.log("3. Aiur");
   console.log("4. Vegeta");

      // Ask the user to pick a planet
      prompt.get(["pick a planet"], function(err, result){
         if (err) {
            return onErr(err);
         } else {
            console.log("Good Choice!!!");
         }

      });

   // return the users value
   console.log("   Your earth weight: " + result.userWeight + "lbs");
});

function onErr(err) {
   console.log(err);
   return 1;
}
