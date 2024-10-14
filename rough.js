let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('a');
  }, 1000);
});

a.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});
