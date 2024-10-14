'use strict';
var mystr = 'Hello World';
var num = 10;
var str = 'Hello This in the "quotes"';
console.log(num + 10000);
console.log(mystr);
console.log(str);
console.log('HELOOO');

var stringlength = str.length;
console.log(stringlength);

var age = 20;
if (age >= 18) {
  console.log('hello teen');
} else {
  console.log('hello baby');
}

const myfunc = (num) => {
  return num * num;
};
console.log(myfunc(25));

var arr = ['aku', 684, 684, 86, 68, 54];
console.log(JSON.stringify(arr));

//if we declare var then it declares globally inside any function scope, but if we use let then it only declares inisde any scope.
//const works similar to the let
//its good to write the code in let variable
//example-

function hello() {
  if (true) {
    var name = 'hello'; //observe here
    console.log(name);
  }
  console.log(name);
}
hello();

//Arrow function-

const name = (a, b) => {
  return a + b;
};
console.log(name(100, 700));
