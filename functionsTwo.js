// passing function expressions as parameters
var numbers = [9, 4, 5, 8, 7, 12, 2, 3];

var newResult = numbers.map(function(number) {return number * 2; });

console.log(newResult);

//exerc1

//Using Map With Arrays

//Create a modifiedNames variable to store our new data.
//Assign passengers.map() to the modifiedNames variable. 
//This will allow us to pass in a function to be used on every element in the array.
//Pass an anonymous function to map().
//The anonymous function should take in arrayCell as a parameter and use 
//that to return a string with the first and last name for a passenger. In other words, 
//if you were to pass in a ["Jason", "Millhouse"] array, the function should return a "Jason Millhouse" string.

var family = [ ['carlos', 'ferreira'],
                 ['carol', 'miranda'], 
                 ['vanilda', 'ferreira'], 
                 ['luciana', 'ferreira'] ];

var names = family.map(function(member) {
            return member[0] + ' ' + member[1];
});

console.log(names);

//Using Map With Arrays II
//The passengers have arrived at Maple Mountain! Take the modifiedNames 
//array that you produced in the last challenge, and map a new anonymous function on it.
//The function should alert the following message to the screen for each passenger in turn:

family.map(function(name) {
  console.log('Yo, ' + name + '!');
});

//Expressions Inside Arrays

var puzzlers = [
  function(input) {
    return(input * 3) -8;
  },
  function(input) {
    return(input + 2) * (input + 2) * (input + 2);
  },
  function(input) {
    return(input * input) - 9;
  },
  function(input) {
    return input % 4;
  }
];

console.log(puzzlers);

//review
//1
var sweetAnnouncement = function() {alert('ATTENTION!\n CUPCAKES.\n\n... THAT IS ALL')};

sweetAnnouncement();
//2

var fruits = ['Apple','Orange','Pineapple','Cranberry','Pomegranate'];

var fruitJuice = fruits.map(function(fruit) { return("\n" + fruit + " juice");
});

alert(fruitJuice);

//Section3

//Choose Their Own Adventure
//  if(userChoice == 1) {
//    return function() {
//      alert("You selected the Vines of Doom!");
//    };
//  } else if(userChoice == 2) {
//    return function() {
//      alert("Looks like you want the Lake of Despair!");
//    };
//  } else if(userChoice == 3) {
//    return function() {
//      alert("The Caves of Catastrophe!");
//    };
//  }
//}

//alert(adventureSelector(3)());

//The devs at Poplar Puzzles would like you to treat an array of functions like a Queue, 
//passing the result of each function into the next until the Queue is empty.

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

var start = 2;

var applyAndEmpty = function(input, queue) {
  var length = queue.length;
  for (var i = 0; i < length; i++) {
    input= queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));

//Immediately-Invoked Puzzler

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

















































