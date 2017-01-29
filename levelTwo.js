//The Concept of Closure
//Examine the code below (i.e., manually trace it),
//in your head determine the final value of the result variable, 
//and alert the value as a number using one line of code.
//1
var hidden = mystery();
var result = hidden(3);

function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
  multiplier *=3;
  return secret * multiplier;
  }
  return mystery2;
}

alert(54);

//exerc2
var hidden = mystery(4);
var result = hidden(2);

function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

alert(40);

//exerc3
var hidden = mystery(3);
var jumble = mystery(hidden);
var result = jumble(2);

function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

alert(122);
