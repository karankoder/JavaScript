//sum of the array-

const sum = (...args) => {
  //rest operator
  let num = 0;
  for (let i = 0; i < args.length; i++) {
    num += args[i];
  }
  return num;
};

console.log(sum(1, 54, 4, 8, 4, 1));
const arr = [554, 4, 8, 54, 87];
const arr2 = [...arr]; //spread operator  , it makes the copy of the array
arr[0] = 100;
console.log(arr2);

var [a, b, , c] = arr; // destructuring of the array
console.log(a, b, c);

let x = 100,
  y = 50;
[x, y] = [y, x];
console.log(x, y);

let num = [1, 2, 3, 34, 4];
let v = num.toString(); // b is now a string
console.log(v, typeof v);
let w = num.join(' and ');
console.log(w, typeof w);

let numb = [3, 5, 1, 2, 4];

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// Array.from
let names = 'Harry';
let arr1 = Array.from(names);
console.log(arr1);

// for...of
for (let item of num) {
  console.log(item);
}
