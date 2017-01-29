//FUNCTION EXPRESSIONS

//FUNCTION DECLARATION
var diff = function difOfSquares(a, b) {
  alert( a*a - b*b);
};

diff(9, 5);

//ANONYMOUS FUNTIONS
var diff2 = function (a, b) {
  alert( a*a - b*b);
};

diff(4, 2);


//MULTIPLE GREETINGS

var greetings;
var newCustomer = true;
//...some code sets newCustomer to true or false...

if( newCustomer ){
    greeting = function () {
      alert("Thanks for visiting the Badlands!\n" + "We hope your stay is...better than most.");
    };
} else {
    greeting = function () {
      alert("Welcome back to the BAdlands!\n" + "Guess they aren't so bad huh?");
    };
}
closeTerminal( greeting );
function closeTerminal ( message ){

  message();

}

//Exerc 1

//Developers for the Forest of Function Expressions Theme Park have created a function declaration 
//named forestFright, but they’ve decided not to keep the function in memory.
//
//Convert the function from a named function declaration to an anonymous function expression and 
//assign it to a variable called 

var runAway = function () {
  var toAlert = '';
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + 'Lions, Tigers, and Bears, Oh My!!\n';
  }
  alert(toAlert);
};

//Exerc2
//The devs at the Death-Defying Dogwoods have determined a specific formula for the quantifiable amount 
//of fear generated at the theme park. Their formula is based on the amount of people, the amount of rain, 
//and the amount of sharks. Yes. Sharks.

var people = 10;
var rain = 5;
var sharks = 5;

var fearGenerated = function (numPeeps,rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkerFear = numSharks * numSharks * numSharks;
  var totalFear = sharkerFear + rainFear
  alert( totalFear);
};

var fear = fearGenerated(people, rain, sharks);

//Exerc3
//They would like to view the contents of the function, rather than executing it.

alert(fearGenerated);

//Exer4
//Inside the fearMessage function expression, use conditional statements (e.g., if, else if) 
//to check the integer value of the fear variable, assigned on line 1, and decide whether its value is LOW or MEDIUM.
//
//For each fear range below we want to display a confirmation message with the corresponding message. 
//We can return a call to the confirm function that has a single string argument containing the correct message.

var fearMessage = function() {
  if(fear < 200) {
    console.log('Fear level: LOW\n Still wanna ride?');
  } else if(fear >=200 && fear <= 300) {
    console.log('Fear level: MEDIUM\n Think you"ll make it?');
  }
}

function confirmRide(confirmToGo) {
  console.log(confirmToGo());
}

var startRide = confirmRide(fearMessage);

