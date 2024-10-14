// let a = document.body.getElementsByClassName('btnn')[0];
// a.addEventListener('click', function (event) {
//   alert('Button clicked');
//   console.log('Button clicked');
//   console.log((event.target.value = 'Closed'));
// });

// const func = () => {
//   return new Promise((resolve, reject) => {
//     console.log('Promise started');
//     reject('Promise rejected');
//   });
// };

// func()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const func = async () => {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ temp: 30, condition: 'Sunny' });
//     }, 2000);
//   });
//   let bangaloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ temp: 20, condition: 'Rainy' });
//     }, 8000);
//   });

//   // delhiWeather
//   //   .then((data) => {
//   //     console.log(data);
//   //     return bangaloreWeather;
//   //   })
//   //   .then((data) => {
//   //     currentTimeMillis = Date.now();
//   //     currentTimeSeconds = Math.floor(currentTimeMillis / 1000);
//   //     console.log(currentTimeSeconds);
//   //     console.log(data);
//   //   });
//   let a = await delhiWeather;
//   console.log(a);
//   let b = await bangaloreWeather;
//   console.log(b);
//   return [a, b];
// };

// func().then((data) => {
//   console.log(data);
// });
// // async functin always return a promise

// const func = () => {
//   console.log('HELLO');
// };

// let a = func();
// console.log(a);

// let p = fetch('https://api.chucknorris.io/jokes/random');
// p.then((response) => {
//   return response.json();
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let num = [1, 5, 84, 5];
console.log(JSON.stringify(num)); // Convert array to JSON string
console.log(JSON.parse(JSON.stringify(num))); // Convert JSON string back to array

const obj = { name: 'John', age: 30 };

obj.name = 'Jane'; // Modify object property
console.log(obj);
var na = function (obj) {
  console.log(obj);
}; // Pass object to function
na(obj);

let nab = () => {
  console.log('Hello');
};

nab();
